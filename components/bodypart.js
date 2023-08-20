function Bodypart(props) {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <div>
      <h2 className=" text-lg text-cyan-400">ToDo List</h2>
      <div className=" flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter Your Todo Task"
          className=" input input-info "
          value={inputValue}
          onChange={handleInputValue}
        />
        <button onClick={handleAddTodo} className=" btn btn-info">
          Add
        </button>
      </div>
      <ul className=" list-disc list-inside my-4">
        {todo.map((todoText, index) => (
          <li key={index} className=" flex justify-between items-center mb-2 ">
            <div className=" flex items-center space-x-2">
              {" "}
              <input type="checkbox" className=" checkbox checkbox-info" />{" "}
              <span className=" text-cyan-500">{todoText}</span>{" "}
            </div>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="btn btn-error "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2 className=" text-lg my-3 text-cyan-400">Inbox</h2>
        <div className=" flex items-center justify-between mx-2 my-3">
          <div className=" flex items-center space-x-2">
            <input type="checkbox" className=" checkbox checkbox-info" />

            <h2 className=" text-cyan-500">Email Find Out Job Proposal</h2>
          </div>
          <input type="radio" className=" radio radio-info" />
        </div>

        <div className=" flex items-center justify-between mx-2 my-3">
          <div className=" flex items-center space-x-2">
            <input type="checkbox" className=" checkbox checkbox-info" />

            <h2 className=" text-cyan-500">Update Portfolio</h2>
          </div>
          <input type="radio" className=" radio radio-info" />
        </div>

        <div className=" flex items-center justify-between mx-2 my-3">
          <div className=" flex items-center space-x-2">
            <input type="checkbox" className=" checkbox checkbox-info" />

            <h2 className=" text-cyan-500">Buy Ideas</h2>
          </div>
          <input type="radio" className=" radio radio-info" />
        </div>
      </div>
    </div>
  );
}

export default Bodypart;
