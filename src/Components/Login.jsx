import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("virat@123.com");
  const [password, setPassword] = useState("Virat@123");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const dispatch = useDispatch();
  const navigateUser = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },

        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(addUser(res.data));

      if (res.status == 200) {
        setIsLoggedIn(true);
        setTimeout(() => {
          setIsLoggedIn(null);
          navigateUser("/");
        }, 1000);
      } else {
        //setShowErrMsg("");
      }
    } catch (err) {
      setIsLoggedIn(false);
      console.error(err);
    }
  };
  return (
    <div>
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
      {isLoggedIn === true && (
        <div
          role="alert"
          className="alert alert-success w-1/4 mx-auto flex justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Login successful!</span>
        </div>
      )}
      {isLoggedIn === false && (
        <div
          role="alert"
          className="alert alert-error w-1/4 mx-auto flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Invalid credentials</span>
        </div>
      )}
    </div>
  );
};
export default Login;
