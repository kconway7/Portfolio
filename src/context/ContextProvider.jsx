import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(() => {
    function checkWindowSize() {
      if (window.innerWidth < 1150) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    }

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    //remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  function toggleNav() {
    setIsNavOpen((cur) => !cur);
  }

  return (
    <GlobalContext.Provider
      value={{
        isNavOpen,
        toggleNav,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error('Context was used outside of ContextProvider');
  }

  return context;
}

/*eslint-disable-next-line */
export { GlobalContextProvider, useGlobalContext };
