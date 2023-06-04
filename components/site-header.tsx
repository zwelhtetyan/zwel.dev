import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icons } from "./icons";
import { DropdownMenu } from "./menu/dropdown-menu";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-headerBg backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 px-4 xs:px-8 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hidden xs:block"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-[23px] w-[23px]" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ThemeToggle />

            <div className="block xs:hidden">
              <DropdownMenu />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
