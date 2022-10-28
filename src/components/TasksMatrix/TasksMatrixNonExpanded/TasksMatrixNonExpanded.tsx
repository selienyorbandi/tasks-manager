import { ITasksSlice, TCuadrant } from "../../../models/ITask";
import Cuadrant from "../../Cuadrant/Cuadrant";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useDispatch } from "react-redux";
import { reOrderTask } from "../../../redux/slices/tasksSlice";

function TasksMatrixNonExpanded({ tasks }: { tasks: ITasksSlice }) {
  const dispatch = useDispatch();
  return (
    <>
      <DragDropContext
        onDragEnd={result => {
          const { source, destination, draggableId } = result;
          if (destination) {
            dispatch(
              reOrderTask({
                task: tasks[source.droppableId as keyof ITasksSlice].find(
                  task => task.id === parseInt(draggableId)
                ),
                sourcePriority: source.droppableId as TCuadrant,
                destinationPriority: destination.droppableId as TCuadrant,
                sourceIndex: source.index,
                destinationIndex: destination.index,
              })
            );
          } else return;
        }}>
        <Droppable droppableId="urgent">
          {droppableProvided => (
            <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              <Cuadrant cuadrant="urgent" tasks={tasks.urgent} />
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
        <Droppable droppableId="high">
          {droppableProvided => (
            <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              <Cuadrant cuadrant="high" tasks={tasks.high} />
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
        <Droppable droppableId="medium">
          {droppableProvided => (
            <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              <Cuadrant cuadrant="medium" tasks={tasks.medium} />
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
        <Droppable droppableId="low">
          {droppableProvided => (
            <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              <Cuadrant cuadrant="low" tasks={tasks.low} />
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default TasksMatrixNonExpanded;
