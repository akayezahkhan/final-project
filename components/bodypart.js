import { useState } from "react";

function Bodypart() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };


  const [notes, setnotes] = useState([]);
  const [inputnotesValue, setInputnotesValue] = useState("");

  const handleInputnotesValue = (e) => {
    setInputnotesValue(e.target.value);
  };

  const handleAddnotes = () => {
    setnotes([...notes, inputnotesValue]);
    setInputnotesValue("");
  };

  const handleDeletenotes = (index) => {
    const newTodo = notes.filter((_, i) => i !== index);
    setnotes(newTodo);
  };

  return (
    <div className="flex border-2 border-black">
      <div className="m-2 border-2 border-orange-600">
        <h2 className=" text-lg">ToDo List</h2>
        <div className=" flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter Your Todo Task"
            className="input input-info "
            value={inputValue}
            onChange={handleInputValue}
          />
          <button
            onClick={handleAddTodo}
            className="p-2 text-white rounded-lg bg-green-600"
          >
            Add
          </button>
        </div>
        <ul className="my-4">
          {todo.map((todoText, index) => (
            <li
              key={index}
              className=" flex justify-between items-center my-1 "
            >
              <div className=" flex items-center space-x-2">
                {" "}
                <input type="checkbox" className="" /> <span>{todoText}</span>{" "}
              </div>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="p-2 text-white rounded-lg bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-2 border-2 border-orange-600">
        <h2 className=" text-lg">Notes</h2>
        <div className=" flex items-center space-x-2">
          <input
            type="text"
            placeholder="Take note"
            className="input input-info "
            value={inputnotesValue}
            onChange={handleInputnotesValue}
          />
          <button
            onClick={handleAddnotes}
            className="p-2 text-white rounded-lg bg-green-600"
          >
            Add
          </button>
        </div>
        <ul className="my-4">
          {notes.map((notes, index) => (
            <li
              key={index}
              className=" flex justify-between items-center my-1 "
            >
              <div className=" flex items-center space-x-2">
                {" "}
                <input type="checkbox" className="" /> <span>{notes}</span>{" "}
              </div>
              <button
                onClick={() => handleDeletenotes(index)}
                className="p-2 text-white rounded-lg bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Bodypart;
