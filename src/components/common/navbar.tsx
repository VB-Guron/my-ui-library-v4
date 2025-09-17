import * as React from "react";
import { cn } from "../../lib/utils";
import "./navbar.scss";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title = "Navbar", className, ...props }) => (
  <nav className={cn("navbar flex items-center px-4 py-2", className)} {...props}>
    <span className="font-bold text-lg">{title}</span>
  </nav>
);
