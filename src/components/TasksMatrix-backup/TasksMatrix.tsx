import { ITask, Priority } from "../../models/ITask";
import TaskList from "../TaskList/TaskList";
import styles from "./TasksMatrix.module.css";

function TasksMatrix({ tasks }: { tasks: ITask[] }) {
  return (
    <main className={styles.TasksMatrix}>
      <h2>Urgent</h2>
      <section className={styles.Urgent}>
        <TaskList
          tasks={tasks.filter((task) => task.priority === Priority.highest)}
        />
      </section>
      <h2>Not urgent</h2>
      <section className={styles.High}>
        <TaskList
          tasks={tasks.filter((task) => task.priority === Priority.high)}
        />
      </section>
      <h2>Important</h2>
      <section className={styles.Medium}>
        <TaskList
          tasks={tasks.filter((task) => task.priority === Priority.medium)}
        />
      </section>
      <h2>Not important</h2>
      <section className={styles.Low}>
        <TaskList
          tasks={tasks.filter((task) => task.priority === Priority.low)}
        />
      </section>
      <div className={styles.TasksMatrix__AddBtn}>+</div>
    </main>
  );
}

export default TasksMatrix;
