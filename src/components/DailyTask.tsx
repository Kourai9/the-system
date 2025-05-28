import { useState } from "react";

function AddTask({ onClose, onAddTask }) {
  const [task, setTask] = useState("");

  function handleAddClick() {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
      onClose();
    }
  }

  return (
    <div className="container bg-blue-500 p-4 rounded shadow-md w-[300px] flex flex-col items-center">
      <label htmlFor="addText" className="block mb-2 font-semibold">
        Add Task:
      </label>
      <input
        type="text"
        id="addText"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border border-gray-400 px-2 py-1 w-full mb-4 text-black"
      />
      <div className="buttons flex justify-around w-full gap-2">
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-1 rounded w-full"
        >
          Close
        </button>
        <button
          onClick={handleAddClick}
          className="bg-blue-800 text-white px-4 py-1 rounded w-full"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default function DailyTask() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function handleDeleteTask(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="dailyTask h-[90%] w-[90%] bg-red-500 flex flex-col items-center relative p-4">
      <div className="title mb-4">
        <h1 className="text-center text-[1.5rem] text-white">Daily Tasks</h1>
      </div>

      <ul className="tasks h-[80%] flex flex-col items-center justify-start gap-2 w-full">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-white text-black w-[80%] px-4 py-2 rounded flex justify-between items-center shadow"
          >
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-red-600 text-white px-2 py-1 rounded text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div
        className="button mt-4 aspect-[16/9] bg-blue-700 w-[15%] text-center rounded flex items-center justify-center cursor-pointer text-white"
        onClick={() => setShowForm(true)}
      >
        ADD
      </div>

      {showForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <AddTask
            onClose={() => setShowForm(false)}
            onAddTask={handleAddTask}
          />
        </div>
      )}
    </div>
  );
}
