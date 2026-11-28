import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";

export default function MainHeader() {
  function showUpcomingSessions() {
    console.log("it is clicked");
  }

  return (
    <header id="main-header">
      <h1>React Mentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sessions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Browse Sessions
            </NavLink>
          </li>
          <li>
            <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
