import React, { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";
import "./Home.css";
import "./Create.css"

const Home = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  //   Get Data
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios.get(url).then((data) => {
      const loadData = data.data;
      const userData = loadData.map((user) => user);
      setUsers(userData);
    });
  }, []);
  //   POST data
  const postData = (e) => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .post(url, {
        name,
        email,
        address,
      })
      .then((data) => {
        const addMember = data.data;
        const newObj = users.concat(addMember);
        setUsers(newObj);
      });
  };

  return (
    <div className="container">
      <div className="usersSection">
        {users?.map((user) => (
          <Users key={user.id} user={user}></Users>
        ))}
      
      </div>
      <div className="addMember">
        <div className="userForm">
          <form onSubmit={postData}>
            <h2>Create Member</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Address:
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </label>
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
