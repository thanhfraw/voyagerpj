import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/homepage" />
            ) : (
              <LoginPage onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />
        <Route
          path="/homepage"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
