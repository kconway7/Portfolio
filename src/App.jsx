import { BrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';
import { GlobalContextProvider } from './context/ContextProvider';

function App() {
  return (
    <GlobalContextProvider>
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
              color: '#f0e7fb',
              backgroundColor: '#0a0d12',
            },
          }}
        />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
