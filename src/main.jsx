import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-day-picker/dist/style.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Context/AuthProvider/AuthProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
