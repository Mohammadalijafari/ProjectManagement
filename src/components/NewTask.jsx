import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
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
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}
