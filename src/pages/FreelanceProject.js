// FreelanceProject.js
import React, { useState } from "react";
import '../App.css';
import TaskForm from "../components/TaskForm"; 
import TaskCard from '../components/TaskCard';


const FreelanceProject = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [submittedTasks, setSubmittedTasks] = useState([]);

  const handleAddNewClick = () => {
    setFormVisible(true);
    console.log("Add New button clicked!");
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission logic (you can replace this with your logic)
    console.log("Form submitted:", formData);
    setSubmittedTasks([...submittedTasks, formData]);
    setFormVisible(false); // Close the form after submission
  };

  const handleFormCancel = () => {
    setFormVisible(false); // Close the form on cancel
  };

  return (
    <div className="content">
      <div className="header">
        <p>Freelance Projects</p>
      </div>
      <div className="seperation">
        <div className="todo">
          <p className="todotext">To Do</p>
          {submittedTasks.map((task, index) => (
          <div key={index} className="card">
            <p className="cardheader">{task.name}</p>
            <div className="cardContent">
            <div><p><div className="cardstart">Start Date: </div><div className="cardstartdate">{task.startDate}</div></p></div>
            <p><div className="cardstart">Deadline: </div><div className="cardstartdate">{task.deadline}</div></p>
            </div>
          </div>
        ))}
          <button className="todobutton" onClick={handleAddNewClick}>
            + Add New
          </button>
        </div>
        <div className="progress">
          <p className="progresstext">In progress</p>
          <button className="progressbutton" onClick={handleAddNewClick}>+ Add New</button>
        </div>
        <div className="review">
          <p className="reviewtext">In Review</p>
          <button className="reviewbutton" onClick={handleAddNewClick}>+ Add New</button>
        </div>
        <div className="completed">
          <p className="completedtext">Completed</p>
          <button className="completedbutton" onClick={handleAddNewClick}>+ Add New</button>
        </div>
      </div>

      {/* Render TaskForm conditionally based on form visibility state */}
      {isFormVisible && (
        <TaskForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
      )}
      <div className="submittedTasks">
        {submittedTasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default FreelanceProject;
