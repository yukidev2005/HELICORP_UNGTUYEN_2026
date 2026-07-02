import type { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
  return <div className=" relative">{children}</div>;
}
