// import { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isLoginForm, setIsLoginForm] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(null);
//   const dispatch = useDispatch();
//   const navigateUser = useNavigate();

//   const handleSignup = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/signup",
//         {
//           firstName,
//           lastName,
//           email,
//           password,
//         },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data.savedUser));
//       navigateUser("/profile/view");
//       console.log(res.data.savedUser);
//     } catch (err) {}
//   };

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/login",
//         {
//           email,
//           password,
//         },

//         { withCredentials: true }
//       );
//       console.log(res.data);

//       dispatch(addUser(res.data));

//       if (res.status == 200) {
//         setIsLoggedIn(true);
//         setTimeout(() => {
//           setIsLoggedIn(null);
//           navigateUser("/user/feed");
//         }, 1000);
//       } else {
//         //setShowErrMsg("");
//       }
//     } catch (err) {
//       setIsLoggedIn(false);
//       console.error(err);
//     }
//   };
//   return (
//     <div>
//       <div className="flex justify-center my-12">
//         <div className="card bg-base-300 w-96 shadow-sm">
//           <div className="card-body">
//             <h2 className="card-title justify-center">
//               {isLoginForm ? "Login" : "Sign-Up"}
//             </h2>
//             <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
//               {!isLoginForm && (
//                 <>
//                   <label className="fieldset-label">First Name</label>
//                   <input
//                     type="email"
//                     className="input"
//                     value={firstName}
//                     onChange={(e) => {
//                       setFirstName(e.target.value);
//                     }}
//                   />
//                   <label className="fieldset-label">Last Name</label>
//                   <input
//                     type="email"
//                     className="input"
//                     value={lastName}
//                     onChange={(e) => {
//                       setLastName(e.target.value);
//                     }}
//                   />
//                 </>
//               )}
//               <label className="fieldset-label">Email</label>
//               <input
//                 type="email"
//                 className="input"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />

//               <label className="fieldset-label">Password</label>
//               <input
//                 type="password"
//                 className="input"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </fieldset>
//             <button
//               className="m-auto btn btn-primary mt-4 w-1/2"
//               onClick={isLoginForm ? handleLogin : handleSignup}
//             >
//               {isLoginForm ? "Login" : "Sign Up"}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isLoggedIn === true && (
//         <div
//           role="alert"
//           className="alert alert-success w-1/4 mx-auto flex justify-center "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 shrink-0 stroke-current"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <span>Login successful!</span>
//         </div>
//       )}
//       {isLoggedIn === false && (
//         <div
//           role="alert"
//           className="alert alert-error w-1/4 mx-auto flex justify-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 shrink-0 stroke-current"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <span>Invalid credentials</span>
//         </div>
//       )}
//       <div className="flex justify-center">
//         <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-20 border p-4 ">
//           <legend className="fieldset-legend flex justify-center"></legend>
//           <label className="labe ">
//             <input
//               type="checkbox"
//               defaultChecked
//               className="toggle"
//               onClick={() => setIsLoginForm(!isLoginForm)}
//             />
//           </label>
//         </fieldset>
//         <p className="mx-5 my-6">
//           Toggle to switch to {isLoginForm ? "Signup" : "login"} !
//         </p>
//       </div>
//     </div>
//   );
// };
// export default Login;
"use client";

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Heart, Code } from "lucide-react";
import { Link } from "react-router-dom";
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
          navigateUser("/user/feed");
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
    <div className="min-h-screen bg-[#1a202c] text-white flex items-center justify-center p-4">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl opacity-30" />

      <div className="relative w-full max-w-md">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <Heart className="h-8 w-8 text-pink-500 fill-pink-500" />
            <Code className="h-4 w-4 text-cyan-400 absolute -top-1 -right-1" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent ml-2">
            <Link to={"/"}>devTinder</Link>
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {isLoginForm ? "Welcome Back" : "Join devTinder"}
          </h2>

          <form className="space-y-6">
            {!isLoginForm && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-200"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-200"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Toggle Section */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center space-x-4">
              <span className="text-white/70">
                {isLoginForm ? "New to devTinder?" : "Already have an account?"}
              </span>
              <button
                type="button"
                className="text-pink-400 hover:text-pink-300 font-medium transition-colors duration-200"
                onClick={() => setIsLoginForm(!isLoginForm)}
              >
                {isLoginForm ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>

        {/* Success Alert */}
        {isLoggedIn === true && (
          <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 flex items-center justify-center space-x-3 backdrop-blur-sm">
            <svg
              className="h-6 w-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-green-300 font-medium">
              Login successful!
            </span>
          </div>
        )}

        {/* Error Alert */}
        {isLoggedIn === false && (
          <div className="mt-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg p-4 flex items-center justify-center space-x-3 backdrop-blur-sm">
            <svg
              className="h-6 w-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-red-300 font-medium">
              Invalid credentials
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
