import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  Icon: LucideIcon;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}
