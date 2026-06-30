import { ArrowRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Link } from "react-router";

export default function HeaderSheet() {
  const links = [
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "Specs", href: "#specs" },
    { name: "Community", href: "#community" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-muted"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:w-100 p-0">
        {/* Header */}
        <SheetHeader className="border-b border-border p-6 text-left">
          <SheetTitle className="text-2xl font-bold flex items-center gap-2">
            PMO Keyboards
          </SheetTitle>
          <SheetDescription>
            Premium custom mechanical keyboards
          </SheetDescription>
        </SheetHeader>

        {/* Navigation */}
        <div className="flex flex-col h-[calc(100vh-120px)] overflow-y-auto">
          <nav className="flex-1 p-6 space-y-2">
            {links.map((link) => (
              <SheetClose
                className="block py-4 hover:bg-accent transition-colors duration-300"
                asChild
                key={link.name}
              >
                <Link to={link.href}>
                  <span className="font-medium text-lg group-hover:text-accent transition-colors">
                    {link.name}
                  </span>
                </Link>
              </SheetClose>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="p-6 space-y-4 border-t border-border bg-muted/50">
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg py-6"
              asChild
            >
              <Link target="_blank" to="https://soigear.vn/wave-75">
                <span>Buy Now</span>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
