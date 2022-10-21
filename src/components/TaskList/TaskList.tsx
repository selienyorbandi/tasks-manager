import { ITask } from "../../models/ITask";
import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({tasks} : {tasks: ITask[]}) {
  return (
    <div className={styles.TaskList} >
        {
            tasks.map(task => <Task task={task} key={task.id} />)
        }
    </div>
  )
}

export default TaskList