import React from "react";
import HomeImage from "./../assets/images/home/homeSplash.jpg";
import Profile1 from "./../assets/images/home/profile1.jpg";
import Profile2 from "./../assets/images/home/profile2.jpg";
import Profile3 from "./../assets/images/home/profile3.jpg";
import Profile4 from "./../assets/images/home/profile4.jpg";
import { BarberBio } from "./home/BarberBio";
import { ScissorsIcon } from "./icons/ScissorsIcon";
import { SlashIcon } from "./icons/SlashIcon";
import { BeakerIcon } from "./icons/BeakerIcon";
import { Service } from "./home/Service";
import { SectionBarbers } from "./home/SectionBarbers";
import { Location } from "./home/Location";
import { SectionWelcome } from "./home/SectionWelcome";
import { SectionServices } from "./home/SectionServices";
import { SectionAbout } from "./home/SectionAbout";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <SectionWelcome
          image={HomeImage}
          welcome={
            " Descubre los cortes de cabello más destacados y los servicios de cuidado excepcionales en nuestra ciudad. Nuestros experto barberos se esfuerzan por ofrecerte una experiencia relajante y revitalizante."
          }
          title={"Bienvenido a DC's Rêves Barbershop"}
        />

        <SectionServices
          id="services"
          title={"Nuestros servicios más populares"}
          message={
            "Desde los cortes de cabello tradicionales hasta los estilos modernos, proporcionamos una variedad completa de servicios para satisfacer todas tus necesidades."
          }
        >
          <Service
            service="Classic Haircut"
            summary="Our signature haircut, tailored to your style and preferences."
          >
            <ScissorsIcon />
          </Service>
          <Service
            service="Straight Razor Shave"
            summary="Experience the ultimate in close, smooth shaves with our traditional straight razor service."
          >
            <SlashIcon />
          </Service>
          <Service
            service="Beard Grooming"
            summary="Keep your beard looking its best with our expert trimming and styling services."
          >
            <BeakerIcon />
          </Service>
          <Service
            service="Kids Haircuts"
            summary="Treat your little ones to a fun and stress-free haircut experience."
          >
            <ScissorsIcon />
          </Service>
          <Service
            service="Color and Highlights"
            summary="Refresh your look with our expert color and highlighting services."
          >
            <ScissorsIcon />
          </Service>
          <Service
            service="Scalp Treatments"
            summary="Nourish and revitalize your scalp with our specialized treatments."
          >
            <ScissorsIcon />
          </Service>
        </SectionServices>
        <SectionBarbers
          title="Conoce a nuestros Barbers"
          summary="Los expertos mas calificados en su ramo"
          bg="#E6B31E"
          id="barbers"
        >
          <BarberBio
            image={Profile1}
            name="César"
            bio="He is the master of masters"
          />
          <BarberBio
            image={Profile2}
            name="Navarro"
            bio="She is the best in fades"
          />
          <BarberBio
            image={Profile3}
            name="Guy 1"
            bio="He is good with new styles"
          />
          <BarberBio
            image={Profile4}
            name="Guy 2"
            bio="He has skills for any kind of hair"
          />
        </SectionBarbers>
        <SectionAbout />
        <Location />
      </main>
    </div>
  );
}
