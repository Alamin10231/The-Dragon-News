import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import Header from './components/Header';

// import {   Router, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
      path:'/',
      element:<HomeLayout></HomeLayout>,
      children:[
        {
          path:"/header",
          element:<Header></Header>
        }

      ]
  },
  {
      path:'news',
      element:<h1>News</h1>
  },
  {
      path:'/auth',
      element:<h1>Login</h1>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
