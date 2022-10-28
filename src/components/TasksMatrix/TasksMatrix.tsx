import { ITasksSlice } from "../../models/ITask";
import TasksMatrixNonExpanded from "./TasksMatrixNonExpanded/TasksMatrixNonExpanded";
import styles from "./TasksMatrix.module.css";
import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";

function TasksMatrix({ tasks }: { tasks: ITasksSlice }) {
  const [isAddingTask, setIsAddingTask] = useState(false);
  return (
    <>
      <main className={styles.TasksMatrix}>
        <TasksMatrixNonExpanded tasks={tasks} />
        <div className={styles.TasksMatrix__AddBtn} onClick={() => setIsAddingTask(!isAddingTask)}>
          +
        </div>
      </main>
      {isAddingTask ? <TaskForm setIsOpen={setIsAddingTask} /> : <></>}
    </>
  );
}

export default TasksMatrix;
