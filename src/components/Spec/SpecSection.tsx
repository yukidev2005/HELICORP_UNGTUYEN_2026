import { wave75Specs } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function SpecSection() {
  return (
    <section
      id="specs"
      className="flex gap-x-10 2xl:max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-[40%] xl:shrink-0 xl:block hidden ">
        <img src="./images/specs.webp" alt="spec" />
      </div>
      <div className="flex-1">
        <h1 className="bg-linear-to-r from-pink-400 via-violet-400 to-pink-500 bg-clip-text text-transparent font-bold md:text-center lg:text-left text-5xl">
          Specs
        </h1>
        <p className="text-foreground/60 mt-4 md:text-center lg:text-left">
          Full technical specifications — structure, materials, connections, and
          software.
        </p>
        <SpecTable />
      </div>
    </section>
  );
}

const SpecTable = () => {
  return (
    <Table className="text-lg">
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {wave75Specs.map(({ details, title }) => (
          <TableRow key={title}>
            <TableCell className="text-foreground/60 transition-colors  duration-300  hover:text-foreground">
              {title}
            </TableCell>
            <TableCell>{details}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
