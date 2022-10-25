import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ITask, TCuadrant } from "../../../models/ITask";
import Cuadrant from "../../Cuadrant/Cuadrant";
import TaskForm from "../../TaskForm/TaskForm";

import leftArrow from "../../../assets/left-arrow.png";
import styles from "./CuadrantExpanded.module.css";

function CuadrantExpanded({ tasks }: { tasks: ITask[] }) {
  const priority = useLocation().pathname.slice(1) as TCuadrant;
  const navigate = useNavigate();
  const [isAddingTask, setIsAddingTask] = useState(false);

  return (
    <>
      <main className={styles.CuadrantExpanded}>
        <Cuadrant cuadrant={priority} tasks={tasks} isExpanded={true}>
          <>
            <div onClick={() => navigate(-1)}>
              <img src={leftArrow} alt="Go back" />
            </div>
            <div
              className={styles.CuadrantExpanded__AddBtn}
              onClick={() => setIsAddingTask(!isAddingTask)}>
              +
            </div>
          </>
        </Cuadrant>
      </main>
      {isAddingTask ? <TaskForm setIsOpen={setIsAddingTask} fixedPriority={priority} /> : <></>}
    </>
  );
}

export default CuadrantExpanded;
