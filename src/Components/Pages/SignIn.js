import React from "react";
import "./SignUpIn.css";

function SignIn() {
  return (
    <div className="container">
      <div className="card">
        <h2>Sign In</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
