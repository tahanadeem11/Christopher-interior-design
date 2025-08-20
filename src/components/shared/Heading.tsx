import React from "react";

import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return <h1 className={cn("text-[#d5d5c8] font-serif text-3xl uppercase", className)}>{children}</h1>;
};

export default Heading;
