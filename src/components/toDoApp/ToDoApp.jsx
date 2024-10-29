import { useContext, useEffect } from "react";
import { TodoContext } from "../../contexs/TodoProvider";
import CategoryList from "../categoryList/CategoryList";
import TaskInput from "../taskInput/TaskInput";
import Styles from "../../../src/App.module.css";
import Card from "../card/Card";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";



const TodoApp = () => {
  const { tasks, filter, setTasks } = useContext(TodoContext);

  useEffect(() => {
    const newTasks = localStorage.getItem("tasks");
    const n = JSON.parse(newTasks);
    if (String(n).length !== 0) {
      setTasks(n);
    }
  }, []);

  useEffect(() => {
    const newList = JSON.stringify(tasks);
    localStorage.setItem("tasks", newList);
  }, [tasks]);

  return (
    <Card style={Styles.body} >
      <Card style={Styles.container}>
        <Card style={Styles.leftSide}>
          <CategoryList />
        </Card>
        <div className={Styles.rightSide}>
          <Header style="text-2xl font-bold mb-4" filter={filter} />

          <TaskInput />
          <Outlet/>
        </div>
      </Card>
    </Card>
  );
};

export default TodoApp;
