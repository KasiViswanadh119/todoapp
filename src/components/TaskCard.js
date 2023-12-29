// TaskCard.js
import React from 'react';
import "../App.css";
const TaskCard = ({ taskData }) => {
  // Check if taskData is defined
  if (!taskData) {
    return null; // or return a default component if taskData is undefined
  }

  // Destructure properties from taskData
  const { name, startDate, deadline, } = taskData;

  return (
    <div className="taskCard">
      <div className="cardHeader">
        <p>{name}</p>
      </div>
      <div className="cardContent">
        <p>Start Date: {startDate}</p>
        <p>Deadline: {deadline}</p>
      </div>
    </div>
  );
};

export default TaskCard;
