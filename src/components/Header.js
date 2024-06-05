import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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

export default function Component() {
  return (
    <header className="w-full bg-white shadow dark:bg-gray-900">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <CustomLink
          href="#"
          className="flex items-center gap-2"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            Acme Inc
          </span>
        </CustomLink>
        <nav className="hidden items-center gap-6 lg:flex">
          <CustomLink
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Home
          </CustomLink>
          <CustomLink
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            About
          </CustomLink>
          <CustomLink
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Services
          </CustomLink>
          <CustomLink
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Contact
          </CustomLink>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
              <CustomLink
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <MountainIcon className="h-6 w-6" />
                <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  Acme Inc
                </span>
              </CustomLink>
              <SheetClose asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Close navigation menu"
                >
                  <XIcon className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
            <div className="grid gap-4 py-6 px-4 md:px-6">
              <CustomLink
                href="#"
                className="flex items-center gap-2 rounded-md py-2 px-4 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                prefetch={false}
              >
                Home
              </CustomLink>
              <CustomLink
                href="#"
                className="flex items-center gap-2 rounded-md py-2 px-4 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                prefetch={false}
              >
                About
              </CustomLink>
              <CustomLink
                href="#"
                className="flex items-center gap-2 rounded-md py-2 px-4 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                prefetch={false}
              >
                Services
              </CustomLink>
              <CustomLink
                href="#"
                className="flex items-center gap-2 rounded-md py-2 px-4 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                prefetch={false}
              >
                Contact
              </CustomLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
