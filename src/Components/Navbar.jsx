import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const selector = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigateUser = useNavigate();

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:8080/logout",
      {},
      { withCredentials: true }
    );
    dispatch(removeUser());
    navigateUser("/login");
    console.log();
  };

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            DevTinder
          </Link>
        </div>
        {selector && (
          <div className="flex gap-2">
            <p className="my-2">Welcome, {selector.firstName.toUpperCase()}</p>
            <div className="dropdown dropdown-end mx-6">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={selector.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile/view" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default NavBar;
