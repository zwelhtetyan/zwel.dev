import { siteConfig } from "@/config/site-config";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="pt-24 text-muted-foreground sm:text-lg">
      <h1 className="section-title">Featured projects</h1>

      <p>Talk is cheap, here are some of my works.</p>

      <div className="mt-10 grid place-content-center gap-y-8 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5">
        {siteConfig.projects.map((pj, idx) => (
          <ProjectCard key={idx} {...pj} />
        ))}
      </div>
    </section>
  );
}
