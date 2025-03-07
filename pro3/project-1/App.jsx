import React from "react";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(['Eat', 'Sleep', 'Code', 'Repeat']);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("");
  const [checkedTasks, setCheckedTasks] = useState([]);

  const handleFilter = () => {
    return tasks.filter((task) => task.toLowerCase().includes(filter.toLowerCase()));
  };

  const handleCheckTask = (task) => {
    if (checkedTasks.includes(task)) {
      setCheckedTasks(checkedTasks.filter((t) => t !== task));
    } else {
      setCheckedTasks([...checkedTasks, task]);
    }
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <>
      <nav className="flex-wrap">
        <h1 className="text-6xl font-bold text-white text-center my-[3rem]">pro3</h1>
      </nav>

      <section className="flex justify-center items-center">
        <div className=" p-5 shadow-lg flex flex-col items-center w-[30rem]">
          <div className="flex items-center justify-center space-x-4">
            <input
              type="text"
              className="border-4 text-white  border-gray-300 rounded text-3xl p-2 w-[70%]"
              value={newTask}
              placeholder="Add text"
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddTask();
                }
              }}
            />
            <button
              className="text-gray-600 text-3xl border-4 border-gray-300 rounded px-5 py-[0.7rem]"
              onClick={handleAddTask}
            >
              +
            </button>
          </div>
          <input
            type="text"
            className="border-4 text-white border-gray-300 rounded text-3xl mt-4 p-2 w-[90%]"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        
      </section>
      <div className="w-[25rem] border-1 border-white mx-auto " ></div>
      <section className="flex justify-center items-center">
        <div className=" rounded p-5 shadow-lg flex flex-col items-center mt-2 w-[30rem]">
          {handleFilter().length === 0 ? (
            <h2 className="text-2xl text-white">No results found</h2>
          ) : (
            handleFilter().map((task, index) => (
              <div key={index} className="flex items-center justify-between border-3 m-1 p-2 rounded border-white w-[90%] ">
                <h1 className={`text-4xl ${checkedTasks.includes(task) ? 'line-through text-gray-400' : 'text-white'}`}>{task}</h1>
                <div>
                  <button
                    className="text-red-600 text-2xl bg-green-600 p-2 rounded mx-2"
                    onClick={() => handleCheckTask(task)}
                  >
                    <i className="text-white fa-solid fa-check"></i>
                  </button>
                  <button
                    className="text-red-600 text-2xl bg-red-600 rounded px-3 py-2"
                    onClick={() => setTasks(tasks.filter((_, taskIndex) => taskIndex !== index))}
                  >
                    <i className="text-white fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default App;
