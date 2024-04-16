import { useEffect, useState } from "react";
import UserTableItem from "./UserTableItem";
import axios from "axios";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  function nameHandler(event) {
    setUser(event.target.value);
  }

  function addUserHandler() {
    if (user !== "") {
      axios
        .post("http://localhost:8080/users", {
          name: user,
        })
        .then((parsedData) => {
          console.log("User Added", parsedData);
        })
        .catch((err) => console.error(err));
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/users?limit=5")
      .then((response) => {
        return response.json();
      })
      .then((parsedData) => {
        setUsers(parsedData);
      });
  }, []);

  return (
    <div className="container">
      <div className="container">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={nameHandler}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={addUserHandler}
        >
          Add User
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">__v</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <UserTableItem key={user._id} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
