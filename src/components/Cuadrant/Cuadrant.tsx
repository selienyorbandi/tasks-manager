import { Link } from "react-router-dom";
import { ITask, TCuadrant } from "../../models/ITask";
import TaskList from "../TaskList/TaskList";
import styles from "./Cuadrant.module.css";

function Cuadrant({
  cuadrant,
  tasks,
  children,
  isExpanded = false,
}: {
  cuadrant: TCuadrant;
  tasks: ITask[];
  children?: JSX.Element;
  isExpanded?: boolean;
}) {
  const cuadrants = {
    urgent: { title: "Do it now", subtitle: "Urgent and important", priority: "urgent" },
    high: { title: "Plan", subtitle: "Important but not urgent", priority: "high" },
    medium: { title: "Delegate", subtitle: "Urgent but not important", priority: "medium" },
    low: { title: "Drop it", subtitle: "Neither important nor urgent", priority: "low" },
  };

  return (
    <>
      <section
        className={`${styles[cuadrant]} ${styles.Cuadrant} ${
          isExpanded ? styles.Cuadrant__expanded : ""
        }`}>
        <Link to={`/${cuadrants[cuadrant].priority}`}>
          <header>
            <div className={styles.Cuadrant__Header__Content}>
              <h2>{cuadrants[cuadrant].title}</h2>
              <h3>{cuadrants[cuadrant].subtitle}</h3>
            </div>
            <div className={styles.Cuadrant__Header__Controls}>{children}</div>
          </header>
        </Link>
        <TaskList
          tasks={tasks.filter(task => task.priority === cuadrants[cuadrant].priority)}
          expanded={isExpanded}
        />
      </section>
    </>
  );
}

export default Cuadrant;
