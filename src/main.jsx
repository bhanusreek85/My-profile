import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage.jsx'
import ContactPage from './pages/ContactPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const router = createBrowserRouter([
  // Todo: Define the accessible routes, and which components respond to which URL
 {
   path:'/',
   element: <App/>,
   errorElement:<ErrorPage/>,
   children:[
    {
      index:true,
      element:<HomePage/>,
    },
    {
      path:'/Education',
      element:<EducationPage/>,
    },
    {
      path:'/Contact',
      element:<ContactPage/>,
    },
    {
      path:'/Skills',
      element:<SkillsPage/>,
    },
    // {
    //   path:'/Profile/:id',
    //   element:<ProfilePage/>,
    // },
      
   ]
}
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
