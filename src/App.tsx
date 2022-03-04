import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const title: string = "Rethink | Todo List App";

  return (
    <div className='container'>
      <Header title={title} />

      <form className='form'>
        <input type='text' className='input' placeholder='Add a task' />
        <button type='submit' className='btn'>
          Add a task
        </button>
      </form>
    </div>
  );
}

export default App;
