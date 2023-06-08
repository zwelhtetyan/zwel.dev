import { About, Contact, Hero, Projects } from "@/components";

export default function IndexPage() {
  return (
    <div className="container max-w-2xl px-4 pb-4 xs:px-8">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <p className="mt-16 text-center text-xs text-muted-foreground xs:text-sm">
        &#169; {new Date().getFullYear()} Zwel. All Rights Reserved.
      </p>
    </div>
  );
}
