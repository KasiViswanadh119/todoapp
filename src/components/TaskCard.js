// TaskCard.js
import React from "react";

const TaskCard = ({ task, onCardClick }) => {
  return (
    <div className="card" onClick={() => onCardClick(task)}>
      <p className="cardheader">{task.name}</p>
      <div className="cardContent">
        <div>
          <p>
            <div className="cardstart">Start Date: </div>
            <div className="cardstartdate">{task.startDate}</div>
          </p>
        </div>
        <p>
          <div className="cardstart">Deadline: </div>
          <div className="cardstartdate">{task.deadline}</div>
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
