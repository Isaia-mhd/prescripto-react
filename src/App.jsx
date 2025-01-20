import "@mantine/core/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box, MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Doc from "./pages/Doc";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import MakeAppointment from "./pages/MakeAppointment";
import StoreDoctor from "./pages/StoreDoctor";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/protectedRoute";

function App() {
  return (
    <MantineProvider>
      <Box className="w-full max-w-[90%] sm:max-w-[80%]  mx-auto">
        {/* <Router> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/doctors" element={<Doc />}></Route>
          <Route path="/doctors/:docSpecialty" element={<Doc />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/login" element={<Login />}>
          
          </Route>
          <Route path="/my-appointments" element={<Appointment />}></Route>
          <Route
            path="/appointment/:docId"
            element={<MakeAppointment />}
          ></Route>
          <Route path="/doctor/:docId" element={<StoreDoctor />}></Route>
        </Routes>
        <Footer />

        {/* </Router> */}
      </Box>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </MantineProvider>
  );
}

export default App;
