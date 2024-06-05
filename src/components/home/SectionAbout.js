import React from "react";

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

export function SectionAbout() {
  return (
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
              Estamos abiertos 7 días a la semana de 9 am a 9 pm para atender
              todas sus necesidades de cuidado. Llegar sin previo aviso es
              bienvenido, pero recomendamos reservar una cita para garantizar la
              disponibilidad.
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
  );
}
