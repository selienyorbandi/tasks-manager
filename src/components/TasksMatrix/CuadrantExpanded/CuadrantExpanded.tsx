import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ITask, TCuadrant } from "../../../models/ITask";
import Cuadrant from "../../Cuadrant/Cuadrant";
import TaskForm from "../../TaskForm/TaskForm";

import leftArrow from "../../../assets/left-arrow.png";
import styles from "./CuadrantExpanded.module.css";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useDispatch } from "react-redux";
import { reOrderTask } from "../../../redux/slices/tasksSlice";

function CuadrantExpanded({ tasks }: { tasks: ITask[] }) {
  const dispatch = useDispatch();
  const priority = useLocation().pathname.slice(1) as TCuadrant;
  const navigate = useNavigate();
  const [isAddingTask, setIsAddingTask] = useState(false);
  return (
    <>
      <DragDropContext
        onDragEnd={result => {
          const { source, destination, draggableId } = result;
          if (destination) {
            dispatch(
              reOrderTask({
                task: tasks.find((task: ITask) => task.id === parseInt(draggableId)),
                sourcePriority: source.droppableId as TCuadrant,
                destinationPriority: destination.droppableId as TCuadrant,
                sourceIndex: source.index,
                destinationIndex: destination.index,
              })
            );
          } else return;
        }}>
        <main className={styles.CuadrantExpanded}>
          <Droppable droppableId={priority}>
            {droppableProvided => (
              <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
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
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </main>
      </DragDropContext>
      {isAddingTask ? <TaskForm setIsOpen={setIsAddingTask} fixedPriority={priority} /> : <></>}
    </>
  );
}

export default CuadrantExpanded;
