

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#26a69a' }}>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">QuickBook</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </div>
    </nav>
  )
}