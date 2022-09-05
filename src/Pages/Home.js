import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Skionetizy Team Members</h1>

    </div>
  );
};

export default Home;
