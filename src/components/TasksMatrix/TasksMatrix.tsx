import { Link } from "react-router-dom";
import { ITask, Priority } from "../../models/ITask";
import TaskList from "../TaskList/TaskList";
import styles from "./TasksMatrix.module.css";

function TasksMatrix({ tasks }: { tasks: ITask[] }) {
  return (
    <main className={styles.TasksMatrix}>
      <section className={styles.Urgent}>
        <header>
          <h2>Do it now</h2>
          <h3>Urgent and important</h3>
        </header>
        <TaskList tasks={tasks.filter(task => task.priority === Priority.highest)} />
      </section>
      <section className={styles.High}>
        <header>
          <h2>Plan</h2>
          <h3>Important but not urgent</h3>
        </header>
        <TaskList tasks={tasks.filter(task => task.priority === Priority.high)} />
      </section>
      <section className={styles.Medium}>
        <header>
          <h2>Delegate</h2>
          <h3>Urgent but not important</h3>
        </header>
        <TaskList tasks={tasks.filter(task => task.priority === Priority.medium)} />
      </section>
      <section className={styles.Low}>
        <header>
          <h2>Drop it</h2>
          <h3>Neither important nor urgent</h3>
        </header>
        <TaskList tasks={tasks.filter(task => task.priority === Priority.low)} />
      </section>
      <Link to="/add">
        <div className={styles.TasksMatrix__AddBtn}>+</div>
      </Link>
    </main>
  );
}

export default TasksMatrix;
