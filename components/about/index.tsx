import { siteConfig } from "@/config/site-config";

export default function About() {
  return (
    <section
      id="about"
      className="mt-8 min-h-screen pt-24 text-muted-foreground sm:text-lg"
    >
      <h1 className="section-title">Who am I ?</h1>

      <p>
        I am a self-driven junior full-stack developer with a passion for
        creating innovative and user-friendly web applications. I am
        consistently enthusiastic about acquiring knowledge in areas that
        pertain to my field.
      </p>

      <p className="mt-3">
        In my free time, I enjoy reading articles and blogs about web
        development, as well as occasionally playing games with my friends.
      </p>

      <p className="mt-3 animate-pulse font-semibold">
        I am currently seeking a job opportunity.
      </p>

      <h1 className="section-title mt-16">Techs I used</h1>

      <div className="flex flex-wrap gap-2">
        {siteConfig.skillIcons.map((icon, idx) => (
          <>
            <icon.Icon key={idx} className="h-11 w-11" />
            <span className="sr-only">{icon.title}</span>
          </>
        ))}
      </div>
    </section>
  );
}
