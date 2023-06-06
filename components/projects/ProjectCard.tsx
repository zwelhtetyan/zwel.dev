import Image from "next/image";
import { Icons } from "../icons";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="w-72">
      <Image
        src="/images/dev.to-clone.png"
        alt="dev.to-homepage"
        width={400}
        height={400}
      />

      <div className="p-2 pt-1">
        <div className="flex w-full items-center justify-between">
          <h2 className="flex-1 cursor-pointer font-bold text-foreground underline-offset-2 hover:underline">
            dev.to clone
          </h2>

          <div className="">
            <Link
              target="_blank"
              rel="noreferrer"
              href="/"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Icons.githubOutline />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href="/"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Icons.arrowUpRight />
              <span className="sr-only">Preview</span>
            </Link>
          </div>
        </div>

        <p className="mt-1 text-base">Social blog platform for developers.</p>
      </div>
    </div>
  );
}
