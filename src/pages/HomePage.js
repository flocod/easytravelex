import React, { useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import ApplyVisa from "../components/ApplyVisa";
import CarRental from "../components/CarRental";
import ExploreDubai from "../components/ExploreDubai";
import TourPackages from "../components/TourPackages";
import Witness from "../components/Witness";
import RelocationSection from "../components/RelocationSection";
import Achievements from "../components/Achievements";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    let revelElms = gsap.utils.toArray(".revelElm");
    console.log({ revelElms });
    const box = document.querySelector(".contain_card");
    revelElms.forEach((revelElm, index) => {
      return new SplitType(revelElm, { types: "words" });
    });

    let revelElmsHeads = gsap.utils.toArray(".revelElmsHead");

    revelElmsHeads.forEach((revelElmsHead, index) => {
      return new SplitType(revelElmsHead, { types: "chars" });
    });

    let ctx = gsap.context(() => {
      const boxHovertimeline = gsap.timeline({ paused: true });
      // Ajoutez l'animation pour le survol
      boxHovertimeline.to(".contain_card img:not(.imgTrouSVG)", {
        duration: 0.5,
        scale: 0,
        translateX: "-50%",
        stagger: 0.05,
      });

      gsap.from(
        ".text_carousel h4 .word,.text_carousel h4,.text_carousel h1 .word,.text_carousel p,.text_carousel .tags_destinations *,.text_carousel .intro_actions .btn,.text_carousel .intro_actions .btn_video_contain,.text_carousel .contain_card, .contain_card .bar",
        {
          opacity: 0,
          y: 150,
          duration: 1,
          skewX: "5deg",
          stagger: 0.07,
          onComplete: function () {
            // Ajoutez les événements de survol
            box.addEventListener("mouseenter", () => {
              boxHovertimeline.play(); // Lance l'animation lorsque la souris entre
            });

            box.addEventListener("mouseleave", () => {
              boxHovertimeline.reverse(); // Fait revenir l'animation à l'état initial lorsque la souris quitte
            });

            revelElms.forEach((revelElm, index) => {
              return SplitType.revert(revelElm);
            });
          },
        }
      );

      let revelElmsHead_targets = gsap.utils.toArray(".revelElmsHead");
      revelElmsHead_targets.forEach((target, index) => {
        gsap.from(target.querySelectorAll(".char"), {
          opacity: 0,
          x: -150,
          y: 50,
          duration: 0.7,
          skewX: "-5deg",
          skewY: "-5deg",
          stagger: 0.05,
          scrollTrigger: {
            toggleActions: "restart pause resume pause",
            trigger: target,
            start: "50% bottom",
          },

          onComplete: function () {
            // revelElmsHeads.forEach((revelElm, index) => {
            //   return SplitType.revert(revelElm);
            // });
          },
        });
      });

      let animate = gsap.utils.toArray(".anime1");
      gsap.from(animate, {
        x: -150,
        y: 50,
        duration: 0.7,

        stagger: 0.05,
        scrollTrigger: {
          toggleActions: "restart pause resume pause",
          trigger: this,
          start: "50% bottom",
        },
      });

      let animate2 = gsap.utils.toArray(".fromTop");
      gsap.from(animate2, {
        y: 100,
        stagger: 0.3,
        scrollTrigger: {
          toggleActions: "restart pause resume pause",
          trigger: this,
          start: "50% bottom",
        },
      });

      let rotatedElemt = gsap.utils.toArray(".rotatedElemt");
      gsap.from(rotatedElemt, {
        opacity: 0,
        rotate: "-150deg",
        duration: 2,
        stagger: 0.3,
        delay: 1.5,
        scrollTrigger: {
          toggleActions: "restart pause resume pause",
          trigger: this,
          start: "50% bottom",
        },
      });

      // // Sélectionnez l'élément sur lequel vous souhaitez ajouter ou supprimer la classe
      // const element = document.querySelector("header");

      // // Variable pour stocker la position précédente du défilement
      // let scrollPosition = window.scrollY;

      // // Fonction pour détecter la direction du défilement et ajouter/supprimer la classe en conséquence
      // function handleScroll() {
      //   const currentScrollPosition = window.scrollY;

      //   // Si la direction du défilement est positive (vers le bas)
      //   if (currentScrollPosition > scrollPosition) {
      //     element.classList.remove("modern_header");
      //   }
      //   // Si la direction du défilement est négative (vers le haut)
      //   else if (currentScrollPosition < scrollPosition) {
      //     element.classList.add("modern_header");
      //   }

      //   // Mettez à jour la position précédente du défilement
      //   scrollPosition = currentScrollPosition;
      // }

      // // Écoutez l'événement de défilement pour déclencher la fonction handleScroll
      // window.addEventListener("scroll", handleScroll);

      // gsap.from("header .other nav li,header .other .btn_marg", {
      //   x: "30vw",
      //   duration: 1.8,
      //   stagger: 0.1,
      // });
      // gsap.from("header .logo", {
      //   x: -100,
      //   duration: 1,
      // });
      // gsap.from(".text_carousel .contain_card img:not(.imgTrouSVG)", {
      //   x: -100,
      //   delay: 2,
      //   duration: 0.7,
      //   stagger: 0.3,
      //   scale: 0,
      // });
    });

    return () => {
      ctx.revert();
      box.removeEventListener("mouseenter", () => {});
      box.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <main className="page">
      <Header></Header>
      <Carousel></Carousel>
      <ApplyVisa
        title="Apply for your visa now"
        description="EasyTravelex Agency offers the best and affordable Visas to
                International Tourists."
        bigTitle="Apply visa"
        isSectionHeader={true}
      ></ApplyVisa>
      <ExploreDubai></ExploreDubai>
      <TourPackages></TourPackages>
      <Witness></Witness>
      <RelocationSection></RelocationSection>
      <CarRental></CarRental>
      <Achievements></Achievements>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </main>
  );
};

export default HomePage;
