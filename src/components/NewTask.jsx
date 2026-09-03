import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-md bg-stone-300 text-xl"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-md bg-stone-600 text-stone-200 px-1 py-[5px] rounded-md hover:bg-stone-800"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
