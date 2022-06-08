import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import remove from "../../assets/remove.svg";

const Task = ({ task, handleUpdate, handleRemove }) => {
  // NOTE: do not delete `data-testid` key value pair
  function toggleTaskStatus() {
    handleUpdate({
      ...task,
      done: !task.done,
    });
  }

  const handleCount = (newCount) => {
    if (newCount > 0) {
      handleUpdate({
        ...task,
        count: newCount,
      });
    }
  };
  return (
    <li data-testid="task" >
      <input type="checkbox" data-testid="task-checkbox" onChange={toggleTaskStatus} checked={task.done}/>
      <div data-testid="task-text">
      {task.text}
      </div>
      <Counter taskId={task.id} count={task.count} handleCount={handleCount}/>
      <button data-testid="task-remove-button" onClick={() => handleRemove(task.id)}>
      <img src={remove} alt="remove button text" />
      </button>
    </li>
  );
};

export default Task;