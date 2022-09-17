import './App.css';
import register from './pages/register'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" component={register}></Route>
      </Routes>
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
        <button>
           Register
        </button>
      </header>
    </div>
  );
}

export default App;
