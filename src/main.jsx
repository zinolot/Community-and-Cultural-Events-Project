import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './MainRouter/MainRouter'

import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './firebase/Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
  </React.StrictMode>,
)
