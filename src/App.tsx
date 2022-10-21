import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import TasksMatrix from "./components/TasksMatrix/TasksMatrix";
import TaskForm from "./components/TaskForm/TaskForm";
import { Route, Routes } from "react-router-dom";

function App() {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TasksMatrix tasks={tasks} />} />
        <Route
          path="/add"
          element={
            <>
              <TasksMatrix tasks={tasks} />
              <TaskForm />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
