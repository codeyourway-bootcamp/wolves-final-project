
import { useAuth } from "../../AuthContext"

  


export default function Navbar() {
 
 const { isAuthenticated, logout } = useAuth();


 const handleLogout = () => {
    logout();
   
    };
  return (
    <nav style={{ backgroundColor: '#26a69a' }}>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">QuickBook</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
        </ul>
      </div>
    </nav>
  )
}
