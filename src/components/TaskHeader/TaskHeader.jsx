import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let total = tasks.length;
  let notDoneTask = tasks.filter((task) => !task.done).length;
  // NOTE: do not delete `data-testid` key value pair


  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">{notDoneTask}  </b>
      <b data-testid="header-total-task">{total}</b>
    </div>
  );
};

export default TaskHeader;