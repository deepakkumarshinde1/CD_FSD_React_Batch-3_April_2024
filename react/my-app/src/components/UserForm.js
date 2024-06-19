import { useState } from "react";

const UserForm = () => {
  let [userName, setUserName] = useState("");
  let [list, setList] = useState([]);
  let inputChange = (event) => {
    let value = event.target.value;
    setUserName(value);
  };

  let saveUserData = () => {
    // new copy (deep copy) spread operator
    // let _list = [...list];
    // _list.push(userName);
    // setList(_list);

    setList([...list, userName]);
    setUserName("");
  };
  return (
    <>
      <center>
        <input
          type="text"
          value={userName}
          placeholder="Enter User Name"
          onChange={inputChange}
        />
        <button onClick={saveUserData}>Save</button>

        <ul>
          {list.map((user, index) => {
            return <li key={index}>{user}</li>;
          })}
        </ul>
      </center>
    </>
  );
};

export default UserForm;
