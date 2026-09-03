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
            <div className="border-1 border-stone-500 rounded-xl px-2 bg-stone-300 w-auto mb-4">
              <li key={task.id} className="flex justify-between my-4">
                <span className="center py-1 px-1 my-1">{task.text}</span>
                <button
                  className="text-stone-200 hover:bg-red-600 border rounded-xl text-md bg-red-500 px-2 py-1 my-1"
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
