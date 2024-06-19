const TodoListItem = (props) => {
  let { value, removeTodo, index, markAsComplete } = props;
  let setBg = value.isCompleted === true ? "yellow" : "";
  return (
    <>
      <li className="todo-list-item" style={{ backgroundColor: setBg }}>
        <section>
          {value.isCompleted === false ? (
            <input type="checkbox" onClick={() => markAsComplete(index)} />
          ) : null}

          <span>{value.name}</span>
        </section>
        {value.isCompleted === false ? (
          <button
            className="fa fa-trash"
            onClick={() => {
              removeTodo(index);
            }}
          ></button>
        ) : null}
      </li>
    </>
  );
};

export default TodoListItem;
