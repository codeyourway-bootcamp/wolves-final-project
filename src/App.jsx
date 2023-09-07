import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LadingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
    <Navbar/>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
