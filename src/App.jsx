// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout.js";
import FreelanceProject from "./pages/FreelanceProject.jsx";
import SBIOutsource from "./pages/Sbioutsource.jsx";
import HPCLProject1 from "./pages/HpclProject.jsx";
import TaskForm from "./components/TaskForm.js"; 

const App = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleFormSubmit = (formData) => {
    // Handle form submission logic
    console.log("Form submitted:", formData);
    setFormVisible(false); // Close the form after submission
  };

  const handleFormCancel = () => {
    // Handle form cancel logic
    setFormVisible(false); // Close the form on cancel
  };

  return (
    <Router>
      {/* Move TaskForm outside of Routes */}
      {isFormVisible && (
        <TaskForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
      )}

      <Routes>
        {/* Other routes remain the same */}
        <Route
          path="/*"
          element={
            <Layout>
              {/* Pass setFormVisible as a prop to FreelanceProject */}
              <FreelanceProject setFormVisible={setFormVisible} />
            </Layout>
          }
        />
        <Route
          path="/sbioutsource"
          element={
            <Layout>
              <SBIOutsource />
            </Layout>
          }
        />
        <Route
          path="/hpclproject1"
          element={
            <Layout>
              <HPCLProject1 />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;