import * as React from "react";
import { cn } from "../../lib/utils";
import "./sidebar.scss";


export interface SidebarProps {
  items: string[];
  onSelect?: (item: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, onSelect, className, style }) => (
  <aside className={cn("sidebar", className)} style={style}>
    <ul>
      {items.map((item) => (
        <li
          key={item}
          className="cursor-pointer py-2 px-3 rounded hover:bg-gray-700"
          onClick={() => onSelect?.(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  </aside>
);
