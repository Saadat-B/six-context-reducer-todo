import { useContext } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

import { FaCheckCircle } from "react-icons/fa";

import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="items mb-3">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id} className="space">
          {todo.todoString}
          <span
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              });
            }}
          >
            <FaCheckCircle />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
