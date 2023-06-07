import Link from "next/link";
import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import { siteConfig } from "@/config/site-config";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 text-muted-foreground">
      <h1 className="bottom-line inline-flex items-center">
        On the web <Icons.web className="ml-2 h-5 w-5" />
      </h1>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "secondary" })}
        >
          <Icons.gitHub className="mr-2 h-6 w-6" /> @zwelhtetyan
        </Link>

        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.linkedin}
          className={buttonVariants({ variant: "secondary" })}
        >
          <Icons.linkedin className="mr-2 h-6 w-6" /> @zwelhtetyan
        </Link>
      </div>

      <p className="mt-10">
        As a dedicated developer, I am constantly driven by my love for coding
        and my insatiable desire for new challenges. If you have opportunities
        for collaboration or want to build something amazing, don&apos;t
        hesitate to contact me !
      </p>

      <div className="mt-10 flex items-center justify-center">
        <Link
          target="_blank"
          href="mailto:zwelhtetyandev@gmail.com"
          className={buttonVariants({ variant: "secondary" })}
        >
          <Icons.mail className="mr-2 h-5 w-5" /> Get in touch
        </Link>
      </div>
    </section>
  );
}
