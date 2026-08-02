function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

      <div className="h-60 bg-gradient-to-br from-blue-600 to-cyan-500 transition duration-300 group-hover:scale-105"></div>

      <div className="p-6">
        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-semibold">
          {project.title}
        </h3>

        <button className="mt-6 text-blue-400">
          View Project →
        </button>
      </div>

    </div>
  );
}

export default ProjectCard;