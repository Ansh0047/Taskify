import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import toast from "react-hot-toast";
import { url } from "../App";
import axios from "axios";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const logoutHandler = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);

    try {
      const {data} = await axios.get(
      `${url
      }/api/users/logout`,
      {
        withCredential: true,
      }
    );
    // console.log(data);
    toast.success("Logout Successfully");
    setIsAuthenticated(false);
    } catch (error) {
      toast.error("Some error");
      // console.log(error);
      setIsAuthenticated(true);
    }
    
  };

  return (
    <nav className="header">
      <div>
        <h2>Taskify</h2>
      </div>
      <article>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>

        {isAuthenticated ? (
          <button className="btn" onClick={logoutHandler}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        
      </article>
    </nav>
  );
};

export default Header;
