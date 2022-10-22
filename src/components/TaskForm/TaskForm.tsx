import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasksSlice";

import { ITask, Priority } from "../../models/ITask";

import styles from "./TaskForm.module.css";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialTaskValue = {
    id: new Date().getMilliseconds(),
    title: "",
    description: "",
    completed: false,
    selected: false,
    priority: Priority.highest,
    dateAdded: new Date().toString(),
  };
  const [task, setTask] = useState<ITask>(initialTaskValue);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.title !== "") {
      setTask({
        ...task,
        id: new Date().getMilliseconds(),
        dateAdded: new Date().toString(),
      });
      setTask(initialTaskValue);
      dispatch(addTask(task));
      navigate("/");
    }
  };

  return (
    <form className={styles.TaskForm} onSubmit={e => handleSubmit(e)}>
      <button className={styles.TaskForm__CloseBtn} aria-label="Close" onClick={() => navigate(-1)}>
        ×
      </button>
      <label>
        Title
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={task.title}
          required
          onChange={e => handleChange(e)}
        />
      </label>
      <label>
        Description
        <textarea
          placeholder="Description"
          name="description"
          value={task.description}
          onChange={e => handleChange(e)}
        />
      </label>
      <label>
        Priority
        <select name="priority" value={task.priority} onChange={e => handleChange(e)}>
          <option value={Priority.highest}>Urgent and important</option>
          <option value={Priority.high}>Important but not urgent</option>
          <option value={Priority.medium}>Urgent but not important</option>
          <option value={Priority.low}>Not urgent and not important</option>
        </select>
      </label>
      <button className={styles.TaskForm__Addbtn}>Add Task</button>
    </form>
  );
}

export default TaskForm;
