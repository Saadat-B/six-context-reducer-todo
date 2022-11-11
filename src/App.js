import { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid className="container">
        <h1>Todo App with Context API</h1>
        <Todos />
        <Todoform />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
