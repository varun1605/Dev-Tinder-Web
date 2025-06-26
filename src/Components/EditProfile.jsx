import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);

  const [gender, setGender] = useState(user.gender);
  const [skills, setSkills] = useState(user.skills);
  const [about, setAbout] = useState(user.about);

  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setlastName(user.lastName);
      setGender(user.gender);
      setSkills(user.skills);
      setAbout(user.about);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleSaveProfile = async () => {
    try {
      setError("");
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 1000);

      //setSuccessMessage(true);
      const result = await axios.patch(
        BASE_URL + "/profile/edit",

        {
          firstName,
          lastName,
          gender,
          skills,
          about,
          photoURL,
        },
        { withCredentials: true }
      );

      dispatch(addUser(result?.data?.data));
      console.log("Updated user data dispatched:", result.data.data);
    } catch (err) {
      setError(err.response.data);
      setSuccessMessage(false);
    } finally {
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen  ">
        <div className="flex justify-center">
          <fieldset className="fieldset w-xs bg-base-300 border border-base-300 p-4 rounded-box ">
            <legend className="fieldset-legend text-2xl">Edit profile</legend>

            <label className="fieldset-label">First Name</label>
            <input
              type="text"
              className="input"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <label className="fieldset-label">Last Name</label>
            <input
              type="text"
              className="input"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />

            {/* <label className="fieldset-label">Gender</label>
        <input
          type="text"
          className="input"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        /> */}
            <label className="fieldset-label">Gender</label>
            <select
              className="select select-bordered"
              name="Gender"
              id="gen"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>

            <label className="fieldset-label">PhotoURL</label>
            <input
              type="text"
              className="input"
              value={photoURL}
              onChange={(e) => {
                setPhotoURL(e.target.value);
              }}
            />
            <label className="fieldset-label">Skills</label>
            <input
              type="text"
              className="input"
              value={skills}
              onChange={(e) => {
                setSkills(e.target.value);
              }}
            />
            <label className="fieldset-label">About</label>
            <input
              type="text"
              className="input"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
            <div className="flex justify-center my-3">
              <button
                className="btn btn-secondary w-1/2 "
                onClick={handleSaveProfile}
              >
                Save profile
              </button>
            </div>
            <p className="text-red-500">{error}</p>
          </fieldset>
          <div className="my-7 mx-5">
            <UserCard
              user={{ firstName, lastName, gender, photoURL, skills, about }}
            />
          </div>
        </div>
        {successMessage && (
          <div
            role="alert"
            className="alert alert-success  mx-50  w-1/6 fixed top-5 "
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
            <span>User upadted successfully!</span>
          </div>
        )}
      </div>
    </>
  );
};
export default EditProfile;
