import { ITask } from "../../models/ITask";
import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, expanded }: { tasks: ITask[]; expanded?: boolean }) {
  return (
    <div className={expanded ? styles.TaskList__Expanded : styles.TaskList}>
      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
