// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import FreelanceProject from "./pages/FreelanceProject.js";
import SBIOutsource from "./pages/Sbioutsource.js";
import HPCLProject1 from "./pages/HpclProject.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <FreelanceProject />
            </Layout>
          }
        />
        <Route
          path="/freelance-project"
          element={
            <Layout>
              <FreelanceProject />
            </Layout>
          }
        />
        <Route
          path="/sbi-outsource"
          element={
            <Layout>
              <SBIOutsource />
            </Layout>
          }
        />
        <Route
          path="/hpcl-project-1"
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
