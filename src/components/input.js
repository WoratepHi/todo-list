import React, { useState } from "react";
import styled from "styled-components";

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

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;
`;

const Field = ({ onChanged }) => {
  const [input, setInput] = useState("");
  function onChangedInput({ target: { value } }) {
    setInput(value);
    onChanged(value);
  }
  return (
    <div>
      <Input type="text" value={input} onChange={onChangedInput}></Input>
    </div>
  );
};

export default Field;
