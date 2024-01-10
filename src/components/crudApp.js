import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(true);
  const [editIndex, setEditIndex] = useState();

  const handleAdd = () => {
    setAllData((newData) => [...newData, name]);
  };

  console.log(name);
  console.log("all data ", allData);

  const handleDelete = (i) => {
    allData.splice(i, 1);
    setAllData([...allData]);
    console.log(i);
  };

  const handleEdit = (i) => {
    setName(allData[i]);
    setShow(false);
    setEditIndex(i);
  };
  const handleUpdate = (i) => {
    console.log("in update");
    allData.splice(editIndex, 1, name);
    setAllData([...allData]);
    setShow(true);
    setName("");
  };

  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {show ? (
        <button
          onClick={() => {
            handleAdd();
          }}
        >
          Add
        </button>
      ) : (
        <button onClick={() => handleUpdate()}>Update</button>
      )}
      {allData.map((val, i) => (
        <div>
          <h1>{val}</h1>
          <button onClick={() => handleEdit(i)}>Edit</button>
          <button onClick={() => handleDelete(i)}>Del</button>
        </div>
      ))}
    </div>
  );
}
