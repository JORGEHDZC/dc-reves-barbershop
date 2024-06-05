import Logo from "./../assets/images/home/logo.jpg";
import { React } from "react";

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

export default function Header() {
  return (
    <div class="flex flex-col min-h-screen">
      <header className="sticky top-0 bg-[#343434] px-4 lg:px-6 h-14 flex items-center text-white">
        <CustomLink href="/" className="flex items-center justify-center">
          <div>
            <img src={Logo} width={50} height={24} alt="Logo" />
          </div>
          <span className="sr-only">Barber Shop</span>
        </CustomLink>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <CustomLink
            href="#services"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Servicios
          </CustomLink>
          <CustomLink
            href="#barbers"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Barberos
          </CustomLink>
          <CustomLink
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Acerca de
          </CustomLink>
          <CustomLink
            href="/booking"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Agendar
          </CustomLink>
        </nav>
      </header>
    </div>
  );
}
