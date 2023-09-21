import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LadingPage";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
import ClientsCalendar from "./Pages/ClientsCalendar";
import Checkout from "./Pages/Checkout";

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
    path: "/Dashboard",
    element: <Dashboard />,
  },
  { 
    path: "/Register", 
    element: <Register /> 
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/clients-calendar",
    element: <ClientsCalendar />
  },
   {
    path: "/checkout",
    element: <Checkout />
  }
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
