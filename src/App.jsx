// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { Route, Routes } from "react-router-dom";
import "./globalstyle.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LadingPage";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
import ClientsCalendar from "./Pages/ClientsCalendar";
import Checkout from "./Pages/Checkout";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/services",
//     element: <Services />,
//   },
//   {
//     path: "/clients-calendar",
//     element: <ClientsCalendar />,
//   },
//   {
//     path: "/checkout",
//     element: <Checkout />,
//   },
// ]);

function App() {
  return (
    <>
      <AuthProvider>
        {/* <RouterProvider router={routes} /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clientsCalendar" element={<ClientsCalendar />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
// npm install react-datetime
