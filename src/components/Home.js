import React from "react";
import HomeImage from "./../assets/images/home/homeSplash.jpg";
import Profile1 from "./../assets/images/home/profile1.jpg";
import Profile2 from "./../assets/images/home/profile2.jpg";
import Profile3 from "./../assets/images/home/profile3.jpg";
import Profile4 from "./../assets/images/home/profile4.jpg";
import { BarberBio } from "./home/BarberBio";
import { CardImage } from "./home/CardImage";
import { ScissorsIcon } from "./icons/ScissorsIcon";
import { SlashIcon } from "./icons/SlashIcon";
import { BeakerIcon } from "./icons/BeakerIcon";
import { Service } from "./home/Service";
import { Section } from "./home/Section";
import { Location } from "./home/Location";

const CustomLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-sm font-medium hover:underline underline-offset-4"
    >
      {children}
    </a>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y ">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <CardImage image={HomeImage} alt="DC Reves Barbershop" />
              <div className="flex flex-col items-start space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#343434]">
                  Bienvenido a DC's Rêves Barbershop
                </h1>
                <p className="mx-auto max-w-[700px] text-[#343434] md:text-xl dark:text-gray-400">
                  Descubre los cortes de cabello más destacados y los servicios
                  de cuidado excepcionales en nuestra ciudad. Nuestros expertos
                  barberos se esfuerzan por ofrecerte una experiencia relajante
                  y revitalizante.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#343434]">
                  Nuestros servicios más populares
                </h2>
                <p className="max-w-[900px] text-[#343434] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Desde los cortes de cabello tradicionales hasta los estilos
                  modernos, proporcionamos una variedad completa de servicios
                  para satisfacer todas tus necesidades.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
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
            </div>
          </div>
        </section>
        <section id="barbers">
          <Section
            title="Conoce a nuestros Barbers"
            summary="Los expertos mas calificados en su ramo"
            bg="#E6B31E"
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
          </Section>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#E6B31E] px-3 py-1 text-sm">
                  Agenda
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#343434]">
                  Haz tu cita ahora
                </h2>
                <CustomLink
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#343434] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#343434]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#040404] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#E6B31E] dark:text-[#343434] dark:hover:bg-[#E6B31E]/90 dark:focus-visible:ring-[#040404]"
                >
                  Ver Disponibilidad Aquí
                </CustomLink>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#E6B31E] px-3 py-1 text-sm">
                  Horario
                </div>
                <p className="mx-auto max-w-[700px] text-[#343434] md:text-xl/relaxed dark:text-gray-400">
                  Estamos abiertos 7 días a la semana de 9 am a 9 pm para
                  atender todas sus necesidades de cuidado. Llegar sin previo
                  aviso es bienvenido, pero recomendamos reservar una cita para
                  garantizar la disponibilidad.
                </p>
                <div className="flex sm:flex-row gap-4">
                  <div className="bg-[#E6B31E] p-4 rounded-lg">
                    <div className="text-xl font-bold text-[#343434]">
                      Lunes a Viernes
                    </div>
                    <div className="text-[#343434]">9am - 9pm</div>
                  </div>
                  <div className="bg-[#E6B31E] p-4 rounded-lg">
                    <div className="text-xl font-bold text-[#343434]">
                      Sábado - Domingo
                    </div>
                    <div className="text-[#343434]">12am - 6pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Location />
      </main>
    </div>
  );
}
