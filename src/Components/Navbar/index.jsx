import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ backgroundColor: "#1b0e02", padding: "0 20px" }}>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          QuickBook
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/clientsCalendar">Clients Calendar</a>
              </li>
              <li>
                <button
                  class="waves-effect waves-red btn-small red darken-3 "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
