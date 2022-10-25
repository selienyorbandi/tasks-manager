import { ITask } from "../../../models/ITask";
import Cuadrant from "../../Cuadrant/Cuadrant";

function TasksMatrixNonExpanded({ tasks }: { tasks: ITask[] }) {
  return (
    <>
      <Cuadrant cuadrant="urgent" tasks={tasks} />
      <Cuadrant cuadrant="high" tasks={tasks} />
      <Cuadrant cuadrant="medium" tasks={tasks} />
      <Cuadrant cuadrant="low" tasks={tasks} />
    </>
  );
}

export default TasksMatrixNonExpanded;
