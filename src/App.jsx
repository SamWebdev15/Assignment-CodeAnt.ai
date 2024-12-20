import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Repositories from "./pages/Repositories";
import MobileNavbar from "./components/MobileNavbar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          {/* Route for the main layout */}
          <Route
            path="/"
            element={
              <div className="bg-white h-screen w-screen flex flex-col md:flex-row">
                <MobileNavbar />
                <div
                  className={`fixed z-40 bg-white h-screen md:static md:flex md:w-60 ${
                    isSidebarOpen ? "block" : "hidden"
                  }`}
                >
                  <Sidebar />
                </div>
                <div className="flex-grow md:p-6 bg-gray-100">
                  <Repositories />
                </div>
              </div>
            }
          />

          {/* Route for the login page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
