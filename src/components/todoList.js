import React, { useState } from "react";
import Field from "./input";
import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: white;
  border-radius: 8px;
  border: none;
  width: 250px;
  height: 48px;
`;

const Remove = styled.button`
  background: red;
  color: white;
  border-radius: 8px;
  border: none;
  height: 30px;
`;
const List = styled.div`
  color: black;
  border-radius: 8px;
  width: 250px;
  height: 48px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 12px;
  margin: 12px;
  &:hover {
    transform: scale(1s);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: white;
  border: 1px solid grey;
  border-radius: 8px;
  width: 250px;
  height: 48px;
`;

const Card = styled.div`
  //   background-color: coral;
  width: 300px;
  height: 300px;
  border: 1px solid grey;
  border-radius: 8px;
  overflow: scroll;
`;

const Todo = () => {
  function onChangedText({ target: { value } }) {
    setText(value);
  }
  function addTodoList() {
    if (text) {
      setTodoList([...todoList, text]);
    }
    setText("");
  }
  function removeTodoList(index) {
    let todo = [...todoList];
    todo.splice(index, 1);
    setTodoList(todo);
  }
  const [todoList, setTodoList] = useState(["a"]);
  const [text, setText] = useState("");

  return (
    <div className="container">
      TODO LIST
      {/* <Field onChanged={onChangedText}></Field> */}
      <Input type="text" value={text} onChange={onChangedText}></Input>
      <Button onClick={addTodoList}>todo</Button>
      <br></br>
      <Card>
        {todoList.map((todo, index) => {
          return (
            <div key={index}>
              <List>
                {todo}
                <Remove className="right" onClick={() => removeTodoList(index)}>
                  delete
                </Remove>
              </List>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Todo;
