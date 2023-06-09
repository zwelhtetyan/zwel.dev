import Link from "next/link";

import type { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-1">
        <Icons.bear />
        <span className="inline-block text-lg font-bold">
          {siteConfig.name}
        </span>
      </Link>

      {items?.length && (
        <nav className="hidden gap-6 xs:flex">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "link-hover flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      )}
    </div>
  );
}
