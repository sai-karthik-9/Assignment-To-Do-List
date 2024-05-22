import React from "react";
import './App.css';

const Display = ({ totalTasks, updateTask, deleteTask }) => {
  return (
    <div>
      {totalTasks.map(item => (
        <div key={item.key}>
          <input
            className="displayBox"
            type="text"
            value={item.description}
            onChange={event => updateTask(event.target.value, item.key)}
          />
          <button
            className="deletebtn"
            onClick={() => deleteTask(item.key)}
          >
            Delete Note
          </button>
        </div>
      ))}
    </div>
  );
};

export default Display;