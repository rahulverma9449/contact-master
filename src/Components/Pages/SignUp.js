import React from "react";
import "./SignUpIn.css";

function SignUp() {
  return (
    <div class="container">
      <div class="card">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div class="forgot">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
