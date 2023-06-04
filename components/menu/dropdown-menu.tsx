import { Flame, Menu, Send, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu as DropdownMenuWrapper,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function DropdownMenu() {
  return (
    <DropdownMenuWrapper>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {siteConfig.mainNav?.map(
            (item: NavItem) =>
              item.href && (
                <DropdownMenuItem key={item.href}>
                  <item.Icon className="mr-2 h-4 w-4" />
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuWrapper>
  );
}
