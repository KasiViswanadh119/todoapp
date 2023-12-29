// FreelanceProject.js
import React, { useState } from "react";
import '../App.css';
import TaskForm from "../components/TaskForm"; 


const FreelanceProject = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  

  const handleAddNewClick = () => {
    setFormVisible(true);
    console.log("Add New button clicked!");
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    if (editingTask) {
      // If editingTask is present, update the existing task
      const updatedTasks = submittedTasks.map((task) =>
        task === editingTask ? { ...task, ...formData } : task
      );
      setSubmittedTasks(updatedTasks);
      setEditingTask(null);
    } else {
      // Otherwise, add a new task
      setSubmittedTasks([...submittedTasks, formData]);
    }
    setFormVisible(false);
  };


  const handleFormCancel = () => {
    setFormVisible(false);
    setEditingTask(null);
  };
  const handleCardClick = (task) => {
    setEditingTask(task);
    setFormVisible(true);
  };

  const renderTaskCards = (status) => {
    return submittedTasks.map((task, index) => (
      task.status === status && (
        <div key={index} className="card" onClick={() => handleCardClick(task)}>
          <p className="cardheader">{task.name}</p>
          <div className="cardContent">
            <div><p><div className="cardstart">Start Date: </div><div className="cardstartdate">{task.startDate}</div></p></div>
            <p><div className="cardstart">Deadline: </div><div className="cardstartdate">{task.deadline}</div></p>
          </div>
        </div>
      )
    ));
  };

  return (
    <div className="content">
      <div className="header">
        <p>Freelance Projects</p>
      </div>
      <div className="seperation">
        <div className="todo">
          <p className="todotext">To Do</p>
          {renderTaskCards('To Do')}
          <button className="todobutton" onClick={handleAddNewClick}>
            + Add New
          </button>
        </div>
        <div className="progress">
          <p className="progresstext">In progress</p>
          {renderTaskCards('In Progress')}
          <button className="progressbutton" onClick={handleAddNewClick}>
            + Add New
            </button>
        </div>
        <div className="review">
          <p className="reviewtext">In Review</p>
          {renderTaskCards('In Review')}
          <button className="reviewbutton" onClick={handleAddNewClick}>
            + Add New
            </button>
        </div>
        <div className="completed">
          <p className="completedtext">Completed</p>
          {renderTaskCards('Completed')}
          <button className="completedbutton" onClick={handleAddNewClick}>
            + Add New
            </button>
        </div>
      </div>

      {/* Render TaskForm conditionally based on form visibility state */}
      {isFormVisible && (
        <TaskForm
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
          initialData={editingTask}
        />
      )}
    </div>
  );
};

export default FreelanceProject;
