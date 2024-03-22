import React from 'react';
import './TaskForm.css';

const TaskEditForm = ({ onSubmit, onCancel, initialData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      startDate: event.target.startDate.value,
      deadline: event.target.deadline.value,
      status: event.target.status.value,
    };

    onSubmit(formData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="TaskFormOverlay">
      <div className="TaskFormContainer">
        <form onSubmit={handleSubmit}>
          <div className='formheader'>
            <p className='formheadertext'>{initialData ? 'Edit Task' : 'Add New Task'}</p>
          </div>
          <div className='formcenter'>
            <div className='formcentername'>
              <label htmlFor="name">Name of the Task:</label>
              <div className='formcenternamebox' >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder='Text'
                  defaultValue={initialData ? initialData.name : ''}
                />
              </div>
            </div>
            <div className='formcenterdates'>
              <div className='startdate'>
                <div>
                  <label htmlFor="startDate">Start Date:</label>
                </div>
                <div className='date'>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    required
                    defaultValue={initialData ? initialData.startDate : ''}
                  />
                </div>
              </div>
              <div className='deadline'>
                <div>
                  <label htmlFor="deadline">Deadline:</label>
                </div>
                <div className='dead'>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    required
                    defaultValue={initialData ? initialData.deadline : ''}
                  />
                </div>
              </div>
            </div>
            <div className='formcenterstatus'>
              <div>
                <label htmlFor="status">Status:</label>
                <span></span>
              </div>
              <select
                id="status"
                name="status"
                required
                defaultValue={initialData ? initialData.status : 'To Do'}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="In Review">In Review</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
          <div className='formfooter'>
            <button className='cancel' type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button className='submit' type="submit">
              {initialData ? 'Save' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEditForm;
