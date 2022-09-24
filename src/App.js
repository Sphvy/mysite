import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/"/>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </Router>
  );
}

export default App;

/*
  <div className="App">
      <header className="App-header">
        <form  >
          <label>
            Name:
          <br></br>
          <input type="text" name="name" />
          <br></br>
            Password:
          <br></br>
          <input type="text" name="Password" />
          <br></br>
          </label>
          <input type="submit" value="Login" />
        </form>
        <Router>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </Router>
        <Routes>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </header>
    </div>

*/