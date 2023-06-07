import { About, Contact, Hero, Projects } from "@/components";

export default function IndexPage() {
  return (
    <div className="container max-w-2xl px-4 xs:px-8">
      <Hero />
      <About />
      <Projects />
      <Contact />

      <div>
        <h1 className="text-4xl font-extrabold text-background">
          text background
        </h1>
        <h1 className="text-4xl font-extrabold text-foreground">
          text foreground
        </h1>
        <h1 className="text-4xl font-extrabold text-muted">text mute</h1>
        <h1 className="text-4xl font-extrabold text-muted-foreground">
          text mute foreground
        </h1>
        <h1 className="text-4xl font-extrabold text-popover">text popover</h1>
        <h1 className="text-4xl font-extrabold text-popover-foreground">
          text popover-foreground
        </h1>
        <h1 className="text-4xl font-extrabold text-primary">text primary</h1>
        <h1 className="text-4xl font-extrabold text-primary-foreground">
          text primary foreground
        </h1>
        <h1 className="text-4xl font-extrabold text-secondary">
          text secondary
        </h1>
        <h1 className="text-4xl font-extrabold text-secondary-foreground">
          text secondary foreground
        </h1>
        <h1 className="text-4xl font-extrabold text-accent">text accent</h1>
        <h1 className="text-4xl font-extrabold text-accent-foreground">
          text accent foreground
        </h1>
        <h1 className="text-4xl font-extrabold text-destructive">
          text destructive
        </h1>
        <h1 className="text-4xl font-extrabold text-destructive-foreground  ">
          text destructive foreground
        </h1>
        <h1 className="text-4xl font-extrabold text-card">text card</h1>
        <h1 className="text-4xl font-extrabold text-card-foreground  ">
          text card foreground
        </h1>
      </div>
    </div>
  );
}
