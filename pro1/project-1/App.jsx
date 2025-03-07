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
        <h1 className="text-6xl font-bold text-white text-center my-[4rem]">Task Manager</h1>
      </nav>

      <section className="flex justify-center items-center">
        <div className="bg-white rounded p-5 shadow-lg flex flex-col items-center w-[30rem]">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="border text-gray-600 border-gray-300 rounded text-2xl p-2"
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
              className="text-gray-600 text-3xl border border-gray-300 rounded px-5 py-2"
              onClick={handleAddTask}
            >
              +
            </button>
          </div>
          <input
            type="text"
            className="border text-gray-600 border-gray-300 rounded text-2xl mt-4 p-2 w-[25rem]"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="bg-white rounded p-5 shadow-lg flex flex-col items-center mt-2 w-[30rem]">
          {handleFilter().length === 0 ? (
            <h2 className="text-2xl text-gray-600">No results found</h2>
          ) : (
            handleFilter().map((task, index) => (
              <div key={index} className="flex items-center justify-between w-full border-1 m-1 p-2 rounded border-gray-300">
                <h1 className={`text-4xl ${checkedTasks.includes(task) ? 'line-through text-gray-400' : 'text-gray-600'}`}>{task}</h1>
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