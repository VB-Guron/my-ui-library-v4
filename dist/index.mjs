// src/components/ui/button.tsx
import * as React from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50",
  ghost: "bg-transparent hover:bg-blue-50 text-blue-600",
  link: "underline text-blue-600 hover:text-blue-800 bg-transparent p-0 h-auto min-w-0"
};
var sizeVariants = {
  default: "px-4 py-2 text-base",
  sm: "px-3 py-1 text-sm",
  lg: "px-6 py-3 text-lg"
};
var Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: cn(
          "rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium",
          buttonVariants[variant],
          sizeVariants[size],
          className
        ),
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/card.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
    "div",
    {
      ref,
      className: cn(
        "rounded-lg border bg-white p-6 shadow-sm",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";

// src/components/ui/modal.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Modal = ({ open, onClose, className, children, ...props }) => {
  if (!open)
    return null;
  return /* @__PURE__ */ jsx3("div", { className: cn("fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", className), ...props, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 relative", children: [
    /* @__PURE__ */ jsx3(
      "button",
      {
        className: "absolute top-2 right-2 text-gray-400 hover:text-gray-600",
        onClick: onClose,
        "aria-label": "Close",
        children: "\xD7"
      }
    ),
    children
  ] }) });
};

// src/components/ui/dropdown.tsx
import * as React3 from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Dropdown = ({ label, items, onSelect }) => {
  const [open, setOpen] = React3.useState(false);
  return /* @__PURE__ */ jsxs2("div", { className: "dropdown relative", children: [
    /* @__PURE__ */ jsx4(
      "button",
      {
        className: "dropdown__trigger px-4 py-2 bg-blue-600 text-white rounded",
        onClick: () => setOpen((o) => !o),
        children: label
      }
    ),
    /* @__PURE__ */ jsx4(
      "div",
      {
        className: cn("dropdown__menu", open && "dropdown__menu--open"),
        style: { minWidth: 180 },
        children: open && items.map((item) => /* @__PURE__ */ jsx4(
          "div",
          {
            className: "dropdown__item",
            onClick: () => {
              onSelect(item);
              setOpen(false);
            },
            children: item
          },
          item
        ))
      }
    )
  ] });
};

// src/components/common/navbar.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var Navbar = ({ title = "Navbar", className, ...props }) => /* @__PURE__ */ jsx5("nav", { className: cn("navbar flex items-center px-4 py-2", className), ...props, children: /* @__PURE__ */ jsx5("span", { className: "font-bold text-lg", children: title }) });

// src/components/common/sidebar.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Sidebar = ({ items, onSelect, className, style }) => /* @__PURE__ */ jsx6("aside", { className: cn("sidebar", className), style, children: /* @__PURE__ */ jsx6("ul", { children: items.map((item) => /* @__PURE__ */ jsx6(
  "li",
  {
    className: "cursor-pointer py-2 px-3 rounded hover:bg-gray-700",
    onClick: () => onSelect?.(item),
    children: item
  },
  item
)) }) });
export {
  Button,
  Card,
  Dropdown,
  Modal,
  Navbar,
  Sidebar,
  cn
};
//# sourceMappingURL=index.mjs.map