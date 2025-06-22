import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const skillsArray = Array.isArray(user?.skills)
    ? user.skills
    : typeof user?.skills === "string"
    ? user.skills.split(",")
    : [];
  const handleSendRequest = async (status, userID) => {
    try {
      const result = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userID,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFeed(userID));
    } catch (err) {
      console.log(err);
    }
  };
  if (!user) {
    return (
      <h1 className="flex flex-wrap justify-center gap-4 my-8 text-3xl">
        No users found
      </h1>
    );
  }

  //const { firstName, lastName, photoURL, gender, skills, age } = user;
  return (
    <div>
      <div className="fieldset w-xs bg-base-300 border border-base-300 p-4 rounded-box  ">
        <figure>
          <img src={user.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
          <div>
            <p>{user.age}</p>
            <p>{user.gender}</p>

            <ul>
              {skillsArray.map((e) => (
                <li key={e.trim()}>{e.trim()}</li>
              ))}
            </ul>
            <p>{user.about}</p>
          </div>
          <div className="card-actions justify-evenly my-5">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("interested", user._id)}
            >
              Interested{" "}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("ignored", user._id)}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
