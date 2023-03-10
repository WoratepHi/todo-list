// import logo from './logo.svg';
// import { useState } from "react";
// import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import SignIn from "./pages/signIn";
import TodoList from "./pages/todoList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path="todoList" element={<TodoList />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
