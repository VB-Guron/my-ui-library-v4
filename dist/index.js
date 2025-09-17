"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Card: () => Card,
  Dropdown: () => Dropdown,
  Modal: () => Modal,
  Navbar: () => Navbar,
  Sidebar: () => Sidebar,
  cn: () => cn
});
module.exports = __toCommonJS(src_exports);

// src/components/ui/button.tsx
var React = __toESM(require("react"));

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var React2 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = React2.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
var Modal = ({ open, onClose, className, children, ...props }) => {
  if (!open)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-white rounded-lg shadow-lg p-6 relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var React3 = __toESM(require("react"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Dropdown = ({ label, items, onSelect }) => {
  const [open, setOpen] = React3.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dropdown relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "button",
      {
        className: "dropdown__trigger px-4 py-2 bg-blue-600 text-white rounded",
        onClick: () => setOpen((o) => !o),
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: cn("dropdown__menu", open && "dropdown__menu--open"),
        style: { minWidth: 180 },
        children: open && items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var Navbar = ({ title = "Navbar", className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { className: cn("navbar flex items-center px-4 py-2", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "font-bold text-lg", children: title }) });

// src/components/common/sidebar.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Sidebar = ({ items, onSelect, className, style }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("aside", { className: cn("sidebar", className), style, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "li",
  {
    className: "cursor-pointer py-2 px-3 rounded hover:bg-gray-700",
    onClick: () => onSelect?.(item),
    children: item
  },
  item
)) }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  Dropdown,
  Modal,
  Navbar,
  Sidebar,
  cn
});
//# sourceMappingURL=index.js.map