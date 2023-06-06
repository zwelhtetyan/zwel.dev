import { Button } from "@/components/ui/button";
import {
  DropdownMenu as DropdownMenuWrapper,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import type { NavItem } from "@/types/nav";
import { Icons } from "../icons";

export function DropdownMenu() {
  return (
    <DropdownMenuWrapper>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <Icons.menu />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {siteConfig.mainNav?.map(
            (item: NavItem) =>
              item.href && (
                <Link href={item.href} key={item.href}>
                  <DropdownMenuItem className="h-10">
                    <item.Icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </DropdownMenuItem>
                </Link>
              )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuWrapper>
  );
}
