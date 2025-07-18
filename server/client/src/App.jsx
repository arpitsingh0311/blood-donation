import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Home from './components/usercomponents/Home';
import DonorForm from './components/usercomponents/DonorForm';
import DonorList from './components/usercomponents/DonorList';
import RequestForm from './components/usercomponents/RequestForm';
import RequestList from './components/usercomponents/RequestList';

const appRouter = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/login", element: <Login />},
  {path: "/signup", element: <Signup />},
  {path: "/dashboard", element: <div>User Dashboard</div>},
  {path: "/admin", element: <div>Admin Dashboard</div>},
  {path: "/donor", element: <DonorForm/>},
  {path: "/donor/list", element: <DonorList/>},
  {path: "/request/create", element: <RequestForm/>},
  {path: "/request/list", element: <RequestList/>},

]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App
