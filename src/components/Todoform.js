import { useContext, useState } from "react";

import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

import { v4, v6 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

function Todoform() {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="warning">Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default Todoform;
