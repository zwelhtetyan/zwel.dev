import { siteConfig } from "@/config/site-config";
import { Icons } from "../icons";

export default function About() {
  return (
    <section id="about" className="pt-24 text-muted-foreground sm:text-lg">
      <h1 className="bottom-line">Who am I ?</h1>

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

      <p className="mt-3">👀 I am currently seeking a job opportunity.</p>

      <h1 className="bottom-line mt-14">Techs I used</h1>

      <div className="flex flex-wrap gap-2">
        {siteConfig.skillIcons.map((icon, idx) => (
          <>
            <icon.Icon key={idx} className="h-11 w-11" />
            <span className="sr-only">{icon.title}</span>
          </>
        ))}
      </div>

      <h1 className="bottom-line mt-14 inline-flex items-center">
        I <Icons.heart className="ml-2 h-5 w-5" />
      </h1>

      <p>Coding, Football, Music, Art, Reading and Learning new things.</p>
    </section>
  );
}
