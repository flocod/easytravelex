import React from "react";
import Header from "../components/Header";
import ApplyVisa from "../components/ApplyVisa";
import Achievements from "../components/Achievements";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import VisaMenu from "../components/VisaMenu";

const Visas = () => {
  return (
    <main className="page">
      <Header></Header>
      <Banner title="Apply for visa"></Banner>
      <VisaMenu></VisaMenu>
      <ApplyVisa
        title="Get your visa now !"
        description="EasyTravelex Agency offers the best and affordable 
Visas to International Tourists. "
        bigTitle=""
        isSectionHeader={true}
      ></ApplyVisa>
      <Achievements></Achievements>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </main>
  );
};

export default Visas;
