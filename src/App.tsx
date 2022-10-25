import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import TasksMatrix from "./components/TasksMatrix/TasksMatrix";
import { Route, Routes } from "react-router-dom";
import CuadrantExpanded from "./components/TasksMatrix/CuadrantExpanded/CuadrantExpanded";

function App() {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TasksMatrix tasks={tasks} />} />
        <Route path="/urgent" element={<CuadrantExpanded tasks={tasks} />} />
        <Route path="/high" element={<CuadrantExpanded tasks={tasks} />} />
        <Route path="/medium" element={<CuadrantExpanded tasks={tasks} />} />
        <Route path="/low" element={<CuadrantExpanded tasks={tasks} />} />
      </Routes>
    </div>
  );
}

export default App;
