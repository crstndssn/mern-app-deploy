import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/TaskContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
import Search from "../components/Search";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (


    <div className="bg-black py-4">
      <div className="container mx-auto flex flex-col items-center pb-10">
        <h2 className="text-5xl text-white text-center border border-white w-fit my-3 py-4 px-8 pb-5 rounded-full mb-12">crea tu nueva bebida</h2>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              {...register("title")}
              autoFocus
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">Please enter a title.</p>
            )}

            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              rows="3"
              placeholder="Description"
              {...register("description")}
            ></Textarea>

            <Label htmlFor="date">Date</Label>
            <Input type="date" name="date" {...register("date")} />
            <Button>Save</Button>
          </form>
        </Card>
        <h2 className="text-5xl text-white text-center border border-white w-fit py-4 px-8 pb-5 rounded-full my-12">inspirate</h2>
        <Search/>
      </div>
    </div>
  );
}