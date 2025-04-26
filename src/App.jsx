import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";
import SignUp from "./Components/SignUp";
import Connections from "./Components/Connections";
import Request from "./Components/Request";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/" element={<Feed />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile/view" element={<Profile />}></Route>
              <Route path="user/connections" element={<Connections />}></Route>
              <Route
                path="/user/connections/requests"
                element={<Request />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <NavBar />
      <h1 className="text-3xl font-bold">Hello World</h1> */}
    </>
  );
}

export default App;
