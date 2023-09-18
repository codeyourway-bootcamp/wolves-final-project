import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LadingPage";
import Register from "./Pages/Register";
import Services from "./Pages/Services";

const routes = createBrowserRouter([
  {
    path: "/LandingPage",
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
  }
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
      <Footer/>
      
    </>
  );
}


export default App;
