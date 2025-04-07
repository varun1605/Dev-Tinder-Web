import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("virat@123.com");
  const [password, setPassword] = useState("Virat@123");
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-12">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label className="fieldset-label">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </fieldset>
          <button className="btn btn-neutral mt-4" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
