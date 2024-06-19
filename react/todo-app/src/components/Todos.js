import { useState } from "react";
import TodoListItem from "./TodoListItem";

const Todos = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([
    {
      name: "task-1",
      isCompleted: false,
    },
    {
      name: "task-2",
      isCompleted: true,
    },
    {
      name: "task-3",
      isCompleted: false,
    },
    {
      name: "task-4",
      isCompleted: true,
    },
  ]);

  const handelInput = (event) => {
    let { value } = event.target;
    setTodoInput(value);
  };

  const saveTodo = () => {
    // let _todoList = [...todoList];
    // _todoList.push(todoInput)
    // setTodoList(_todoList);
    let newTodo = {
      name: todoInput,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    alert("Todo Added Successfully");
    setTodoInput("");
  };

  const removeTodo = (index) => {
    // delete
    let _todoList = [...todoList];
    _todoList.splice(index, 1);
    setTodoList(_todoList);

    alert("delete successfully");
  };

  const markAsComplete = (index) => {
    let _todoList = [...todoList];
    _todoList[index].isCompleted = true;
    setTodoList(_todoList);
    alert("task completed successfully");
  };
  return (
    <>
      <h1 className="title">Todo App</h1>
      <section className="todo-input-section">
        <input type="text" value={todoInput} onChange={handelInput} />
        <button onClick={saveTodo}>
          <span className="fa fa-save"></span> Save
        </button>
      </section>
      <ul className="todo-list">
        {todoList.map((value, index) => {
          return (
            <TodoListItem
              key={index}
              value={value}
              index={index}
              removeTodo={removeTodo}
              markAsComplete={markAsComplete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
