import React from "react";
import Header from "../components/Header";
import TourPackages2 from "../components/TourPackages2";
import Achievements from "../components/Achievements";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Tours = () => {
  return (
    <main className="page">
      <Header></Header>
      <Banner title="Tours package" after="Our tours"></Banner>
      <TourPackages2 leftSide=""></TourPackages2>
      <Achievements></Achievements>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </main>
  );
};

export default Tours;
