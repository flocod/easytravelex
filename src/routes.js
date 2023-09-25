import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Visas from "./pages/Visas";
import Tours from "./pages/Tours";
import ToursApplication from "./pages/ToursApplication.js";
import VisasApplication from "./pages/VisasApplication.js";
import ToursCustomBooking from "./pages/ToursCustomBooking.js";
import ContactUs from "./pages/ContactUs";
import Cars from "./pages/Cars";


const routes = () => {



  


  return (
    <Routes>
      <Route index exact path="/" element={<HomePage />} />
      <Route exact path="/visas" element={<Visas />} />
      <Route exact path="/tours" element={<Tours />} />
      <Route exact path="/tours/toursapplication/:titleApplication" element={<ToursApplication />} />
      <Route exact path="/toursapplication/:titleApplication" element={<ToursApplication />} />
      <Route exact path="/visasapplication/:titleApplication" element={<VisasApplication />} />
      <Route
        exact
        path="/tourscustombooking"
        element={<ToursCustomBooking />}
      />
      <Route exact path="/contacts" element={<ContactUs />} />
      <Route exact path="/cars" element={<Cars />} />
      <Route exact path="/composetour" element={<ToursCustomBooking />} />
    </Routes>
  );
};

export default routes;
