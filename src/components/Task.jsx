import "../styles.css";
import React, { useRef } from "react";

export default function Task({
  title,
  description,
  editMode,
  handleEdit,
  saveTask,
  i,
  handleDelete,
}) {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (event) => {
    saveTask(i, titleRef.current.value, descriptionRef.current.value);
    event.preventDefault();
  };

  if (editMode) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="task">
          <label htmlFor="title">
            Task
            <input type="text" name="title" ref={titleRef} id="title" />
          </label>
          <label htmlFor="description">
            Description
            <input
              type="text"
              name="description"
              ref={descriptionRef}
              id="description"
            />
          </label>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  } else {
    return (
      <div className="task">
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
}
