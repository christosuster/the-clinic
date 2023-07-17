import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Successfull from "./Pages/Appointment/Successfull";
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Booking from "./Pages/Home/Booking/Booking";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />

            <Route path="/booking/success" element={<Successfull />} />

            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/doctors" element={<Doctors />} />

            <Route
              path="/services/:serviceName"
              element={
                <PrivateRoute>
                  <ServiceDetails />
                </PrivateRoute>
              }
            />

            <Route
              path="/booking"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
