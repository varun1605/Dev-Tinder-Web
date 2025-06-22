import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const dispatch = useDispatch();
  const navigateUser = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.savedUser));
      navigateUser("/profile/view");
      console.log(res.data.savedUser);
    } catch (err) {}
  };

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
            <h2 className="card-title justify-center">
              {isLoginForm ? "Login" : "Sign-Up"}
            </h2>
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
              {!isLoginForm && (
                <>
                  <label className="fieldset-label">First Name</label>
                  <input
                    type="email"
                    className="input"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <label className="fieldset-label">Last Name</label>
                  <input
                    type="email"
                    className="input"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </>
              )}
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
            <button
              className="m-auto btn btn-primary mt-4 w-1/2"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Sign Up"}
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
      <div className="flex justify-center">
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-20 border p-4 ">
          <legend className="fieldset-legend flex justify-center"></legend>
          <label className="labe ">
            <input
              type="checkbox"
              defaultChecked
              className="toggle"
              onClick={() => setIsLoginForm(!isLoginForm)}
            />
          </label>
        </fieldset>
        <p className="mx-5 my-6">
          Toggle to switch to {isLoginForm ? "Signup" : "login"} !
        </p>
      </div>
    </div>
  );
};
export default Login;
