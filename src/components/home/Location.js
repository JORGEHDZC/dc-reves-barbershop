import React from "react";
import { GoogleMapsIcon } from "../icons/GoogleMapsIcon";

export function Location() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#E6B31E]">
      <div>
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-[#343434] text-white px-3 py-1 text-sm">
            Location
          </div>

          <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#343434]">
            Visita nuestro lugar!
          </h2>
          <p className="mx-auto max-w-[700px] text-[#e6b31e] md:text-xl/relaxed dark:text-gray-400">
            Nuestra barbería se encuentra a pocos pasos de la Av. del Peñon.
          </p>

          <p className="mx-auto max-w-[700px] text-[#e6b31e] md:text-xl/relaxed dark:text-gray-400">
            Cozamaloc 1 Av.Peñon, Xochitenco 1A Seccion, Chimalhuacan, MEX,
            Estado de México 56360
          </p>
          <div class="flex justify-center">
            <GoogleMapsIcon />
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              title="DC's Reves Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.6610075302029!2d-98.9634839!3d19.4277805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3307aa602c1%3A0xf2beb1371a9ae31d!2sDC&#39;S%20REVES%20Barber%20Shop!5e0!3m2!1sen!2smx!4v1717574146068!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
