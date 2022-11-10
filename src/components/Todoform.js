import { useContext, useState } from "react";

import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

import { v6 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

function Todoform() {
  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
          />
          <Button color="warning">Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default Todoform;
