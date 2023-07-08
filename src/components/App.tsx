import {Box} from "@mui/material";
import Todo from "./todo/Todo.tsx";
import TodoProvider from "../context/TasksProvider.tsx";

const App = () => {
  return (
    <div className='app'>
      <Box>
        <TodoProvider>
          <Todo/>
        </TodoProvider>
      </Box>
    </div>
  )
}

export default App