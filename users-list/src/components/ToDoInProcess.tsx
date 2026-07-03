import type { ToDo } from "../types/ToDo";
import "../App.css";

type ToDoListProps = {
  tasks: ToDo[];
  onPending: (task: ToDo) => void;
  onProcess: (task: ToDo) => void;
  onDone: (task: ToDo) => void;
  deleteTask: (id: number) => void;
};
function ToDoInProcess({ tasks, onPending, onProcess, onDone, deleteTask }: ToDoListProps) {
  return (
    <>
    <h2>Виконується</h2>
    <ul>
      {tasks.map((task) =>
        task.status === "inProcess" ? (
          <li className="task-card" key={task.id}>
    <p>{task.task}</p>

    <div className="task-buttons">
        <button onClick={() => onPending(task)}>
            Pending
        </button>

        <button onClick={() => onProcess(task)}>
            In Process
        </button>

        <button onClick={() => onDone(task)}>
            Done
        </button>

        <button onClick={() => deleteTask(task.id)}>
            Delete
        </button>
    </div>
</li>
        ) : null,
      )}
    </ul>
    </>
  );
}

export default ToDoInProcess;
