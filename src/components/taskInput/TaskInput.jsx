import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../../contexs/TodoProvider";
import toast, { Toaster } from "react-hot-toast";

const TaskInput = () => {
  const [taskInput, setTaskInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("uncategory");

  const categories = ["Groceries", "College", "Payments"];
  const { addTask } = useContext(TodoContext);

  const handleAddTask = (e) => {
    if (taskInput) {
      addTask(taskInput, categoryInput);
      setTaskInput("");
      setCategoryInput("uncategory");
      toast.success("Add Task To You List!!!!");
    } else {
      toast.error("Please Enter Your Task!!!!");
    }

    e.target.value = "";
  };

  return (
    <>
      <Toaster />
      <div className="p-2 w-full">
        <div className="flex flex-row">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="border p-2 w-3/6 rounded-xl mb-2 "
            placeholder="Add a new task insdie"
          />
          <select
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            className="border p-2 w-2/6 rounded-xl mb-2 cursor-pointer"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddTask}
            className="border p-2 w-1/6 rounded-xl mb-2 cursor-pointer bg-green-300 hover:bg-green-700  hover:shadow-black hover:shadow-xl"
          >
            Add To List
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
