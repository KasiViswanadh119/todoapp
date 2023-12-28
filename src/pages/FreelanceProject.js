// FreelanceProject.js
import React from "react";
import '../App.css';

const FreelanceProject = () => {
  return (
    <div className="content">
        <div className="header">
            <p>Freelance Projects</p>
        </div>
        <div className="seperation">
            <div className="todo">
                <p className="todotext">To Do</p>
                <button className="todobutton">+ Add New</button>
            </div>
            <div className="progress">
                <p className="progresstext">In progress</p>
                <button className="progressbutton">+ Add New</button>
            </div>
            <div className="review">
                <p className="reviewtext">In Review</p>
                <button className="reviewbutton">+ Add New</button>
            </div>
            <div className="completed">
                <p className="completedtext">Completed</p>
                <button className="completedbutton">+ Add New</button>
            </div>
        </div>

    </div>
  )
};

export default FreelanceProject;
