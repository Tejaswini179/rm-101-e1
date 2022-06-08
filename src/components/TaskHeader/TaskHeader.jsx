import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let total = tasks.length;
  let notDoneTask = tasks.filter((task) => !task.done).length;
  // NOTE: do not delete `data-testid` key value pair


  return (
   
    <div data-testid="task-header" className={styles.taskHeader}>
     <h1>Todo List</h1>
      <b data-testid="header-remaining-task">you have{notDoneTask}  </b>of
      <b data-testid="header-total-task">{total}tasks remaining</b> 
    </div>
  );
};

export default TaskHeader;