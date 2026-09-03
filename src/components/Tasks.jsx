import NewTask from "./NewTask.jsx";
import Button from "./Button.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <div className="border-2 border-stone-300 rounded-xl px-2 bg-stone-200 w-auto h-auto mb-4">
              <li key={task.id} className="flex justify-between my-4">
                <span className="center py-1 px-1 ">{task.text}</span>
                <button
                  className="text-stone-200 hover:bg-red-500 border rounded-md text-md bg-red-400 px-2 py-1"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </li>
            </div>
          ))}
        </ul>
      )}
    </section>
  );
}
