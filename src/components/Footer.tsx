import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="px-4 py-20  ">
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">PMO</h1>
          <p className="text-muted-foreground">
            © 2024 PMO Engineering. All rights reserved.
          </p>
        </div>
        <LinkList />
      </div>
    </footer>
  );
}

const linkList = [
  {
    title: "Disocrd",
    href: "",
  },
  {
    title: "Twitter",
    href: "",
  },
  {
    title: "Instagram",
    href: "",
  },
  {
    title: "Documentation",
    href: "",
  },
  {
    title: "Support",
    href: "",
  },
];

const LinkList = () => {
  return (
    <div className=" flex gap-x-5">
      {linkList.map((link, i) => (
        <Link
          className="text-muted-foreground duration-300 hover:text-foreground"
          key={i}
          to={link.href}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};
