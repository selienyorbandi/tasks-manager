import { ITask } from "../../models/ITask";
import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, expanded }: { tasks: ITask[]; expanded?: boolean }) {
  return (
    <div className={expanded ? styles.TaskList__Expanded : styles.TaskList}>
      {tasks.map((task, index) => (
        <Task task={task} key={task.id} index={index} />
      ))}
    </div>
  );
}

export default TaskList;
