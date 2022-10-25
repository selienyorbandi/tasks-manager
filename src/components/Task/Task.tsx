import { ITask } from "../../models/ITask";
import Checkbox from "../Checkbox/Checkbox";
import cross from "../../assets/cross.svg";
import styles from "./Task.module.css";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask, selectTask } from "../../redux/slices/tasksSlice";

function Task({ task }: { task: ITask }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleCompletedStatus = () => {
    dispatch(completeTask(task));
  };

  const handleSelectedStatus = () => {
    dispatch(selectTask(task));
  };

  return (
    <div className={styles.Task} onClick={() => handleSelectedStatus()}>
      <div className={`${task.completed ? styles.Task__Done : ""} ${styles.Task__Content} ${task.selected ? styles.Task__Selected : ""}`} >
        <h4>{task.title}</h4>
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
