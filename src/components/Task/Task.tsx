import { ITask } from "../../models/ITask";
import Checkbox from "../Checkbox/Checkbox";
import cross from "../../assets/cross.svg";
import styles from "./Task.module.css";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../redux/slices/tasksSlice";

function Task({ task }: { task: ITask }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleCompletedStatus = () => {
    dispatch(completeTask(task));
  };

  return (
    <div className={styles.Task}>
      <div className={`${task.completed ? styles.Task__Done : ""} ${styles.Task__Content}`}>
        <h3>{task.title}</h3>
        {task.selected ? <p> {task.description} </p> : <></>}
      </div>
      <div className={styles.Task__Controllers}>
        <img
          src={cross}
          alt="Delete task"
          width="30px"
          height="30"
          onClick={() => handleDelete()}
        />
        <span onClick={() => handleCompletedStatus()}>
          <Checkbox isChecked={task.completed} />
        </span>
      </div>
    </div>
  );
}

export default Task;
