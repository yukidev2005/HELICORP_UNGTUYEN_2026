import type { ComponentProps, PropsWithChildren } from "react";
import { FieldLabel } from "./ui/field";
import { Label } from "@/components/ui/label";

export default function RequiredLabel({
  children,
  ...props
}: PropsWithChildren & ComponentProps<typeof Label>) {
  return (
    <div className=" relative inline ">
      <FieldLabel className="inline-flex" {...props}>
        {children}
      </FieldLabel>
      <p className="   absolute top-0  text-red-500">*</p>
    </div>
  );
}
