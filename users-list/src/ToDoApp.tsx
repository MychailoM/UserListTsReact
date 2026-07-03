import { useEffect, useState, type ChangeEvent } from "react";
import "./App.css";
import type { ToDo } from "./types/ToDo";
import ToDoTasks from "./components/ToDoTasks";
import ToDoInProcess from "./components/ToDoInProcess";
import ToDoDone from "./components/ToDoDone";

function ToDoApp() {
  const [tasks, setTasks] = useState<ToDo[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
      return [];
    }

    return JSON.parse(savedTasks);
  });
  const [task, setTask] = useState<string>("");
  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("введіть завдання");
      return;
    }
    setTasks((prev) => [...prev, { id: Date.now(), task, status: "tasks" }]);
    setTask("");
  };

  const onPending = (task: ToDo) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, status: "tasks" } : t)),
    );
  };

  const onProcess = (task: ToDo) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, status: "inProcess" } : t)),
    );
  };

  const onDone = (task: ToDo) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, status: "done" } : t)),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>ToDo Board</h1>

      <div className="todo-input">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Введіть своє завдання"
        />

        <button onClick={addTask}>Додати</button>
      </div>

      <div className="todo-columns">
        <div className="column">
          <ToDoTasks
            tasks={tasks}
            onPending={onPending}
            onProcess={onProcess}
            onDone={onDone}
            deleteTask={deleteTask}
          />
        </div>

        <div className="column">
          <ToDoInProcess
            tasks={tasks}
            onPending={onPending}
            onProcess={onProcess}
            onDone={onDone}
            deleteTask={deleteTask}
          />
        </div>

        <div className="column">
          <ToDoDone
            tasks={tasks}
            onPending={onPending}
            onProcess={onProcess}
            onDone={onDone}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;
