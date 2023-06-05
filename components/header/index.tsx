import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggler";
import { Icons } from "../icons";
import { DropdownMenu } from "../menu/DropdownMenu";
import { MainNav } from "./MainNav";
import { siteConfig } from "@/config/site-config";

export function Header() {
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
