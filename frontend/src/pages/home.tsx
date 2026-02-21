import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is the home page lmao</h1>
      <ul>
        <li>
          <NavLink className="btn" to="login">
            Login
          </NavLink>
          <NavLink className="btn" to="register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
