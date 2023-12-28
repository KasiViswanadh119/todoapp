// Layout.js
import React from "react";
import SideBar from "../Sidebar.js";

const Layout = ({ children }) => {
    return (
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, padding: 0, backgroundColor: "#ffffff" }}>
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;
