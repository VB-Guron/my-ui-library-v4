import * as React from "react";
import { cn } from "../../lib/utils";

export interface DropdownProps {
  label: string;
  items: string[];
  onSelect: (item: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="dropdown relative">
      <button
        className="dropdown__trigger px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
      </button>
      <div className={cn("dropdown__menu", open && "dropdown__menu--open")}
        style={{ minWidth: 180 }}
      >
        {open && items.map((item) => (
          <div
            key={item}
            className="dropdown__item"
            onClick={() => {
              onSelect(item);
              setOpen(false);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
