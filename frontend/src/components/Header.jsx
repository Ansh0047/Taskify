import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="header">
        <div>
            <h2>Taskify</h2>
        </div>
        <article>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </article>
    </nav>
  )
}

export default Header