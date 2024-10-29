import { TodoProvider } from "../src/contexs/TodoProvider";  
import TodoApp from "../src/components/toDoApp/ToDoApp";  

const App = () => (  
    <TodoProvider>  
        <TodoApp />  
    </TodoProvider>  
);  

export default App;