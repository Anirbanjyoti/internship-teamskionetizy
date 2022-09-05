import React, { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";
import './Home.css'

const Home = () => {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios.get(url).then((data) => {
      const loadData = data.data;
      const userData = loadData.map((user) => user);
      setUsers(userData);
    });
  }, []);
  return (
    <div className="container">
      <div className="users">
        {users.map((user) => (
          <Users key={user.id} user={user}></Users>
        ))}
      </div>
    </div>
  );
};

export default Home;
