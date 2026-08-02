import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-400 font-semibold uppercase">
          Portfolio
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Our Recent Work
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;