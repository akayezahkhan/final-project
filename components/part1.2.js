import { useState } from "react";

function Part1_2() {
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
    <div className="h-full flex flex-col rounded-lg p-1 ">
      <div className="border-slate-100 border-2 rounded-lg h-full">
        <div className="p-2 h-1/2 overflow-hidden">
          <h2 className="text-md">To Do</h2>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Enter task"
              className="mr-3 rounded-lg px-2 min-w-[120px]"
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
          <ul className="my-2">
            {todo.map((list, index) => (
              <li
                key={index}
                className=" flex justify-between items-center my-1 "
              >
                <div className=" flex items-center space-x-2">
                  {" "}
                  <input type="checkbox" className="" /> <span>{list}</span>{" "}
                </div>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="text-red-600"
                >
                  - Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <hr></hr>

        <div className="p-2 h-1/2 overflow-hidden">
          <h2 className="text-md">Notes</h2>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Take note"
              className="mr-3 rounded-lg px-2 min-w-[120px]"
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
          <ul className="my-2">
            {notes.map((notes, index) => (
              <li
                key={index}
                className=" flex justify-between items-center my-1 "
              >
                <div className=" flex items-center space-x-2">
                  {" "}
                 <span>{notes}</span>{" "}
                </div>
                <button
                  onClick={() => handleDeletenotes(index)}
                  className="text-red-600"
                >
                  - Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Part1_2;
