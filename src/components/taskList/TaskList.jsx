import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../../contexs/TodoProvider";
import noTaskList from "../../assets/image/TaskNotFound.png"

const TaskList = () => { 
    const { tasks, removeTask } =
    useContext(TodoContext); 
    return(
        
    <ul className="p-4 w-full  h-96 overflow-y-auto"> 
        {!tasks.length?(
            <div className="flex flex-row justify-between items-center">

            <p className="text-4xl text-font">Sorry<br/><span className="text-3xl"> The Task Could Not Be Found...</span></p>
            <img src={noTaskList} alt="TaskList Not Found" className="w-1/3 h-1/3"/>
            </div>
        ): tasks.map((item) => (  
            <li key={item.id} className="flex justify-between items-center mb-2">  
                <span className="text-xl">{item.title}  <strong  className="w-fit h-8 rounded-md bg-red-500 text-white ml-5 text-sm text-center">{item.category}</strong></span>  
                
                <FaTrashAlt onClick={() => removeTask(item.id)} className=" cursor-pointer hover:scale-150"/>
            </li>  
        ))}
    </ul>
    
)};

export default TaskList;