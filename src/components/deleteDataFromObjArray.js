import { useState } from "react";
import "./styles.css";

// import { Fun } from "./Components/practice1";

export default function App() {
  const [users, setUsers] = useState([
    { id: "1", username: "Ashwin" },
    { id: "2", username: "Rahul" },
    { id: "3", username: "Rohan" },
    { id: "4", username: "Dev" },
    { id: "5", username: "Varun" },
    { id: "6", username: "Sachin" }
  ]);
  const handleDel = (id) => {
    const newUser = users.filter((u) => u.id !== id);
    setUsers(newUser);
  };
  return (
    <div className="App">
      {/* <Fun /> */}
      {users.map((user, k) => (
        <div key={k}>
          {user.username}
          <button onClick={() => handleDel(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
