import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasksSlice";

import { ITask, TCuadrant } from "../../models/ITask";

import styles from "./TaskForm.module.css";

function TaskForm({
  fixedPriority,
  setIsOpen,
}: {
  fixedPriority?: TCuadrant;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const initialTaskValue = {
    id: new Date().getMilliseconds(),
    title: "",
    description: "",
    completed: false,
    selected: false,
    priority: fixedPriority || "urgent",
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
      setIsOpen(false);
    }
  };

  return (
    <form className={styles.TaskForm} onSubmit={e => handleSubmit(e)}>
      <button
        type="button"
        className={styles.TaskForm__CloseBtn}
        aria-label="Close"
        onClick={() => setIsOpen(false)}>
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
      {!fixedPriority ? (
        <label>
          Priority
          <select name="priority" value={task.priority} onChange={e => handleChange(e)}>
            <option value={"urgent"}>Urgent and important</option>
            <option value={"high"}>Important but not urgent</option>
            <option value={"medium"}>Urgent but not important</option>
            <option value={"low"}>Not urgent and not important</option>
          </select>
        </label>
      ) : (
        <></>
      )}
      <button type="submit" className={styles.TaskForm__Addbtn}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
