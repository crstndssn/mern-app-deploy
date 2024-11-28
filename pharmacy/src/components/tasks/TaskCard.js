import { useTasks } from "../../context/TaskContext";
import { Button, ButtonLink, Card } from "../ui";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-3xl font-bold text-white mb-2">{task.title}</h1>
      </header>
      <p className="text-white">{task.description}</p>
      {/* format date */}
      <p className="rounded-full text-white border border-white w-fit px-3 my-3">
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
      <div className="flex gap-x-2 items-center mt-2">
          <button className="bg-red-600 px-4 py-2 rounded-full text-white" onClick={() => deleteTask(task._id)}>Delete</button>
          <button className="bg-limon px-4 py-2 rounded-full text-black" to={`/tasks/${task._id}`}>Edit</button>
        </div>
    </Card>
  );
}