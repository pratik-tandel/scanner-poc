import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Html5QrCode from './Html5QrCode.tsx'
import ZxingScanner from './ZxingScanner.tsx'
import ScanbotSdkScanner from './ScanbotSdkScanner.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/html5-qrcode',
        element: <Html5QrCode />
      },
      {
        path: '/react-zxing',
        element: <ZxingScanner />
      },
      {
        path: '/scanbot-sdk',
        element: <ScanbotSdkScanner />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
