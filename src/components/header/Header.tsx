import { ModeToggle } from "../ModeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import HeaderSheet from "./HeaderSheet";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button className="hidden font-semibold bg-foreground text-background sm:inline-flex    transition-all duration-300 hover:scale-105">
              <Link target="_blank" to={"https://soigear.vn/wave-75"}>
                Buy Now
              </Link>
            </Button>

            {/* Mobile menu sheet */}
            <HeaderSheet />
          </div>
        </div>
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2 cursor-pointer group">
      <h1 className="font-bold text-xl lg:text-2xl tracking-tight">PMO</h1>
    </a>
  );
};

const NavLinks = () => {
  const links = [
    { name: "Products", href: "#products" },
    { name: "Colors", href: "#colors" },
    { name: "Features", href: "#features" },
    { name: "Swith", href: "#swith" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </>
  );
};
