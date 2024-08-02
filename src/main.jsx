import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
