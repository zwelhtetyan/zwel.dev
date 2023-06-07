import { About, Contact, Hero, Projects } from "@/components";

export default function IndexPage() {
  return (
    <div className="container max-w-2xl px-4 xs:px-8">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
