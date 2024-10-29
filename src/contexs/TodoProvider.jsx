import  { useState, createContext } from "react";  
import toast from "react-hot-toast";

export const TodoContext = createContext();  

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {  
    const [tasks, setTasks] = useState([]);  
    const [filter, setFilter] = useState("");  



    const addTask = (title, category) => {  
        const newTask = {  
            id: tasks.length,  
            title, 
            category,
        };  
        setTasks([...tasks, newTask]);  
    };  

    const removeTask = (id) => {  
        const newTasks = tasks.filter((task) => task.id !== id);  
        setTasks(newTasks);  
        toast.success("Delete Task")
    };  

    const filteredTasks =        
        filter? tasks.filter((item) => item.category === filter)  
           : tasks;  


    

    return (  
        <TodoContext.Provider value={{ tasks: filteredTasks,filter,setTasks, addTask, removeTask, setFilter }}>  
            {children}  
        </TodoContext.Provider>  
    );  
};