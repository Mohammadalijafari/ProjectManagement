import Button from "./Button.jsx";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((projects) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-md my-1  hover:text-stone-200  hover:rounded-md hover:bg-stone-600";

          if (projects.id === selectedProjectId) {
            cssClasses += " bg-stone-600 text-stone-400 rounded-md";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={projects.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(projects.id)}
              >
                {projects.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
