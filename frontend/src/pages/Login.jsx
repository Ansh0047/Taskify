import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../main";
import toast from "react-hot-toast";
import axios from "axios";
import { url } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);

    try {
      const {data} = await axios.post(
      `${url}/api/users/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredential: true,
      }
    );
    
    toast.success(data.message);
    setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error);
      setIsAuthenticated(false);
    }
    
  };

  if(isAuthenticated) return <Navigate to="/" />

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
