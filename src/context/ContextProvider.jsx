import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);

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
