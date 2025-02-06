import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import Header from './components/Header';
import LatestNews from './components/LatestNews/LatestNews';
import MainContent from './components/MainContent/MainContent';
import Leftside from './components/mainstructure/Leftside';
// import CategoryNews from './components/CategoryNews';
import Maincontent from './components/mainstructure/Maincontent';
import AuthLayout from './Layouts/AuthLayout';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import AuthProviders from './Providers/AuthProviders';


// import {   Router, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
      path:'/',
      element:<HomeLayout></HomeLayout>,
      children:[
        {
          path:"",
          element:<Navigate to={"/category/01"} ></Navigate>
      },
        {
          path:"/category/:id",
          element:<Maincontent></Maincontent>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
        {
          path:"/header",
          element:<Header></Header>
        },
        {
          path:"/latestnews",
          element:<LatestNews></LatestNews>
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
  {
    path:"/MainContent",
    element:<MainContent></MainContent>,
    children:[
      {
        path:"/MainContent/Leftside",
        loader: ()=>fetch("https://openapi.programming-hero.com/api/news/categories"),
        element:<Leftside></Leftside>
      }
    ]
    

  },
    {
    path: "/authlayout",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/authlayout/login",
        element: <Login></Login>,
      },
      {
        path: "/authlayout/register",
        element: <Register></Register>,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
