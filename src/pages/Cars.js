import React from "react";
import Header from "../components/Header";
import CarRental from "../components/CarRental";
import Footer from "../components/Footer";


const Cars = () => {


  return (
    <main className="page">
      <Header></Header>
      
      <CarRental></CarRental>
      <Footer></Footer>
    </main>
  );
};

export default Cars;
