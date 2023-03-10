import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import PropTypes from "prop-types";
import logo from "./logo.png";
import Field from "./input";
import styled from "styled-components";

const Button = styled.button`
  background: #4caf50;
  color: white;
  border-radius: 8px;
  border: none;
  width: 250px;
  height: 40px;
  margin: 12px;
`;

const BtnAccount = styled.button`
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  color: black;
  border-radius: 3px;
  border: 1px solid grey;
  width: 250px;
  height: 40px;
  margin: 12px;
`;

const Img = styled.img`
  width: 50px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onChangedUsername(value) {
    setUsername(value);
  }
  function onChangedPassword(value) {
    setPassword(value);
  }
  return (
    <div className="container">
      <div>
        <img src={logo}></img>
      </div>
      <br></br>
      <div className="card">
        <div>
          <h2>เข้าสู่ระบบ</h2>
        </div>
        <Field onChanged={onChangedUsername}></Field>
        <Field onChanged={onChangedPassword}></Field>
        <Link to="/todolist">
          <Button>เข้าสู่ระบบ</Button>
        </Link>
        <div className="ma-3 grey--text">
          ลืมรหัสผ่าน <a>คลิกที่นี่</a>
        </div>
        <div className="grid-container">
          <div>
            <hr></hr>
          </div>
          <div className="text-caption">หรือ</div>
          <div>
            <hr></hr>
          </div>
        </div>
        <div>
          <BtnAccount>
            <Img src={logo}></Img>
            สร้างบัญชีผู้ใช้งานโดย OPENLANDSCAPE
          </BtnAccount>
        </div>
      </div>
      <br></br>
      <div className="text-body-2 primary--text">ติดต่อเจ้าหน้าที่</div>
    </div>
  );
};

export default Login;
