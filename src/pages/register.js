import React from "react";

function Register() {
  return (
    <div className="Pageregister">
      <header>
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
            Email:
          <br></br>
          <input type="text" name="Email" />
          </label>
          <input type="submit" value="Login" />
        </form>
      </header>
    </div>
  );
}

export default Register;
