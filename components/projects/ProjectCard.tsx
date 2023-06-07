import Image from "next/image";
import { Icons } from "../icons";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Project } from "@/types/project";

export default function ProjectCard({
  image,
  title,
  desc,
  repo,
  preview,
}: Project) {
  return (
    <div className="w-full max-w-[400px] overflow-hidden">
      <Link target="_blank" rel="noreferrer" href={preview}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          priority
          className="transition-all duration-500 hover:scale-[.99] hover:opacity-80"
        />
      </Link>

      <div className="p-2 pt-[2px]">
        <div className="flex w-full items-center justify-between">
          <Link
            target="_blank"
            rel="noreferrer"
            href={preview}
            className="link-hover text-base font-bold text-primary sm:text-lg"
          >
            {title}
          </Link>

          <div className="">
            <Link
              target="_blank"
              rel="noreferrer"
              href={repo}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Icons.githubOutline />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={preview}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Icons.arrowUpRight />
              <span className="sr-only">Preview</span>
            </Link>
          </div>
        </div>

        <p className="mt-[2px] text-base">{desc}</p>
      </div>
    </div>
  );
}
