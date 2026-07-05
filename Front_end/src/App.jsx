import Login from "./auth/login";
import Registration from "./auth/reg";
import Forgot from "./auth/forgot";
import Reset from "./auth/reset";
import Otp from "./auth/otp";
import Owner from "./dashboard/owner";
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Registration />
    },
    {
      path: "/forgot",
      element: <Forgot />
    },
    {
      path: "/otp",
      element: <Otp />
    },
    {
      path: "/reset",
      element: <Reset />
    },
    {
      path: "/owner",
      element: <Owner />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;