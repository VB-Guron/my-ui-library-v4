import * as React from 'react';
import { ClassValue } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
}
declare const Modal: React.FC<ModalProps>;

interface DropdownProps {
    label: string;
    items: string[];
    onSelect: (item: string) => void;
}
declare const Dropdown: React.FC<DropdownProps>;

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
}
declare const Navbar: React.FC<NavbarProps>;

interface SidebarProps {
    items: string[];
    onSelect?: (item: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const Sidebar: React.FC<SidebarProps>;

declare function cn(...inputs: ClassValue[]): string;

export { Button, ButtonProps, Card, CardProps, Dropdown, DropdownProps, Modal, ModalProps, Navbar, NavbarProps, Sidebar, SidebarProps, cn };
