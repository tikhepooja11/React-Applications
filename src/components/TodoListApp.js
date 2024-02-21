import React from "react";
import { useState } from "react";

const TodoListApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };
  const toggleTodo = (index) => {
    const updatedTodoList = [...todos];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodos(updatedTodoList);
  };
  return (
    <div>
      <h1 className="font-bold text-4xl text-center m-5 p-5 text-white ">
        ✅ Todo List
      </h1>

      <div className="bg-gray-200 my-30 mx-auto w-4/12 m-5 p-5 text-center rounded-lg gradient-text bg-gradient-to-r from-purple-500  to-purple-300">
        <h1 className="font-bold text-lg">Simplify your work with Todo App</h1>
        <div>
          <div className="flex m-5 p-5">
            <input
              type="text"
              value={newTodo}
              placeholder="Enter todo name"
              onChange={(e) => setNewTodo(e.target.value)}
              className="m-3 p-3 mx-auto w-full bg-violet-600 border border-black focus:outline-none focus:border-green-500 focus:border-2 hover:border-purple-700 hover:border-2"
            ></input>
            <button
              onClick={addTodo}
              className="bg-green-500 m-3 p-3 w-1/3 rounded-lg gradient-text bg-gradient-to-r from-green-600  to-green-400"
            >
              Add Todo
            </button>
          </div>
          <div className="gradient-text bg-gradient-to-r from-blue-400  to-blue-200 m-5 p-5 items-center text-center ">
            <h1 className="font-bold text-lg">Todo List</h1>
            {todos.map((todo, index) => (
              <ul>
                <li key={index} className="flex  justify-between">
                  <span
                    className={todo.completed ? "line-through" : "no-underline"}
                  >
                    {todo.text}
                  </span>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(index)}
                  />
                </li>
              </ul>
            ))}
          </div>

          <div className="font-bold text-lg flex m-5 p-5   justify-between ">
            <p>Total Todos : {todos.length}</p>
            <p className="">
              Completed Todos :{" "}
              {todos.filter((todo) => todo.completed === true).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListApp;
