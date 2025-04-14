function Task(props) {
  const { id, task, status } = props.todo;
  const statusText = status ? "true" : "false";
  return (
    <>
      <p>no: {id}</p>
      <h1>Task: {task}</h1>
      <h3>Status: {statusText}</h3>
    </>
  );
}

export default Task;
