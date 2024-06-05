import React from "react";
import { InstagramIcon } from "./icons/InstagramIcon";
import { FacebookIcon } from "./icons/FacebookIcon";

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

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#343434] text-white">
      <p className="text-xs">
        &copy; 2024 DC's Rêves Barbershop. Todos los derechos Reservados.
      </p>
      <nav className="flex gap-2">
        <CustomLink
          href="https://www.instagram.com/dcs__revesbs/"
          className="inline-flex h-9 items-center justify-center rounded-md bg-[#343434] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#343434]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#040404] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#E6B31E] dark:text-[#343434] dark:hover:bg-[#E6B31E]/90 dark:focus-visible:ring-[#040404]"
        >
          <InstagramIcon />
        </CustomLink>
        <CustomLink
          href="https://www.facebook.com/profile.php?id=61556424626029"
          className="inline-flex h-9 items-center justify-center rounded-md bg-[#343434] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#343434]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#040404] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#E6B31E] dark:text-[#343434] dark:hover:bg-[#E6B31E]/90 dark:focus-visible:ring-[#040404]"
        >
          <FacebookIcon />
        </CustomLink>
      </nav>
    </footer>
  );
}
