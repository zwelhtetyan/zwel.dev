import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="pt-24 text-muted-foreground sm:text-lg">
      <h1 className="section-title">Featured projects</h1>

      <p>Talk is cheap, here are some of my works.</p>

      <div className="mt-10">
        <ProjectCard />
      </div>
    </section>
  );
}
