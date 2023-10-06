import { BrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';
import { GlobalContextProvider } from './context/ContextProvider';
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <GlobalContextProvider>
      <GlobalStyles />
      <BrowserRouter>
        <AppLayout />
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              color: 'var(--color-purple-tint1)',
              backgroundColor: 'var(--color-charcoal-shade1)',
            },
          }}
        />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
