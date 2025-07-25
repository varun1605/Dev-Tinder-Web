// import "./App.css";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Body from "./Components/Body";
// import Login from "./Components/Login";
// import Profile from "./Components/Profile";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
// import Feed from "./Components/Feed";
// import SignUp from "./Components/SignUp";
// import Connections from "./Components/Connections";
// import Request from "./Components/Request";
// import DevTinderLanding from "./Components/DevTinderLanding";

// function App() {
//   return (
//     <>
//       <Provider store={appStore}>
//         <BrowserRouter basename="/">
//           <Routes>
//             <Route path="/" element={<DevTinderLanding />}>
//               <Route path="/signup" element={<SignUp />}></Route>
//               <Route path="/" element={<Feed />}></Route>
//               <Route path="/login" element={<Login />}></Route>
//               <Route path="/profile/view" element={<Profile />}></Route>
//               <Route path="user/connections" element={<Connections />}></Route>
//               <Route
//                 path="/user/connections/requests"
//                 element={<Request />}
//               ></Route>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </Provider>
//     </>
//   );
// }

// export default App;
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Body from "./Components/Body";
// import Login from "./Components/Login";
// import Profile from "./Components/Profile";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
// import Feed from "./Components/Feed";
// import SignUp from "./Components/SignUp";
// import Connections from "./Components/Connections";
// import Request from "./Components/Request";
// import DevTinderLanding from "./Components/DevTinderLanding";

// function App() {
//   return (
//     <Provider store={appStore}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<DevTinderLanding />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile/view" element={<Profile />} />
//           <Route path="/user/connections" element={<Connections />} />
//           <Route path="/user/connections/requests" element={<Request />} />
//           {/* optional: a route to render Feed inside Body */}
//           <Route path="/user/feed" element={<Feed />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Feed from "./Components/Feed";
import SignUp from "./Components/SignUp";
import Connections from "./Components/Connections";
import Request from "./Components/Request";
import DevTinderLanding from "./Components/DevTinderLanding";
import Chat from "./Components/Chat";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Landing page without navbar/footer */}
          <Route path="/" element={<DevTinderLanding />} />

          {/* Auth pages without navbar/footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected pages with navbar/footer */}
          <Route element={<Body />}>
            <Route path="/chat/:targetUserId" element={<Chat />} />
            <Route path="/user/feed" element={<Feed />} />
            <Route path="/profile/view" element={<Profile />} />
            <Route path="/user/connections" element={<Connections />} />
            <Route path="/user/connections/requests" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
