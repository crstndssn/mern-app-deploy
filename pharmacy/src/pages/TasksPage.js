import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { TaskCard } from "../components/tasks/TaskCard";
// import { ImFileEmpty } from "react-icons/im";

export function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);
 
  return (
    <div className="bg-black">
      {tasks.length === 0 && (
        <div className="flex justify-center items-center p-10 min-h-[80vh] bg-black">
          <div>
            {/* <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" /> */}
            <h1 className="font-bold text-xl text-white">
              No tasks yet, please add a new task
            </h1>
          </div>
        </div>
      )}

      <div className="container mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-2 min-h-screen">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
}