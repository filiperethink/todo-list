import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [todo, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setTodoText(value);
    setError(false);
  };

  const onAddTodo = () => {
    if (todo) {
      setError(false);
      setTodos([todo, ...todos]);
      setTodoText("");
    } else {
      setError(true);
    }
  };

  return (
    <div className='container'>
      <Header />
      <div className='form'>
        <input
          onChange={onChangeText}
          type='text'
          name='addTask'
          className='input'
          value={todo}
          placeholder='Add uma Tarefa'
        />
        <button onClick={onAddTodo} type='submit' className='btn'>
          Add Tarefa
        </button>
      </div>
      {error && (
        <p className='error'>
          Encontramos um erro, por favor insira uma tarefa!
        </p>
      )}

      <div className='todos'>
        {todos.length > 0 ? (
          todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })
        ) : (
          <p>Nenhuma tarefa até agora!</p>
        )}
      </div>
    </div>
  );
}

export default App;
