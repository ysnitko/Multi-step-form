import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Sidebar />

      <PersonalInfo />
    </div>
  );
}

export default App;
