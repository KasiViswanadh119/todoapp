// HPCLProject1.js
import React,{useState,useEffect} from "react";
import '../App.css';
import TaskEditForm from "../components/TaskEditForm";

const HPCLProject1 = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const storageKey = "tasks_HPCLProject1";

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(storageKey)) || [];
    setSubmittedTasks(storedTasks);
  }, []);
  
  // Save tasks to localStorage with the unique key
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(submittedTasks));
  }, [submittedTasks]);


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
            <p>HPCL Project1</p>
        </div>
        <div className="seperation">
            <div className="todo">
                <p className="todotext">To Do</p>
                {renderTaskCards('To Do')}
                <button className="todobutton" onClick={handleAddNewClick}>+ Add New</button>
            </div>
            <div className="progress">
                <p className="progresstext">In progress</p>
                {renderTaskCards('In Progress')}
                <button className="progressbutton" onClick={handleAddNewClick}>+ Add New</button>
            </div>
            <div className="review">
                <p className="reviewtext">In Review</p>
                {renderTaskCards('In Review')}
                <button className="reviewbutton" onClick={handleAddNewClick}>+ Add New</button>
            </div>
            <div className="completed">
                <p className="completedtext">Completed</p>
                {renderTaskCards('Completed')}
                <button className="completedbutton" onClick={handleAddNewClick}>+ Add New</button>
            </div>
        </div>
        {isFormVisible && (
        <TaskEditForm
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
          initialData={editingTask}
        />
      )}

    </div>
  )
};

export default HPCLProject1;