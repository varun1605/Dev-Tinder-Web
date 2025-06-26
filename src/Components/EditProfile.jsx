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
// import { useState } from "react";
// import UserCard from "./UserCard";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";

// const EditProfile = ({ user }) => {
//   const [firstName, setFirstName] = useState(user.firstName);
//   const [lastName, setLastName] = useState(user.lastName);
//   const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
//   const [age, setAge] = useState(user.age || "");
//   const [gender, setGender] = useState(user.gender || "");
//   const [about, setAbout] = useState(user.about || "");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const [showToast, setShowToast] = useState(false);

//   const saveProfile = async () => {
//     //Clear Errors
//     setError("");
//     try {
//       const res = await axios.patch(
//         BASE_URL + "/profile/edit",
//         {
//           firstName,
//           lastName,
//           photoUrl,
//           age,
//           gender,
//           about,
//         },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res?.data?.data));
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//       }, 3000);
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center my-10">
//         <div className="flex justify-center mx-10">
//           <div className="card bg-base-300 w-96 shadow-xl">
//             <div className="card-body">
//               <h2 className="card-title justify-center">Edit Profile</h2>
//               <div>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">First Name:</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={firstName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <label className="form-control w-full max-w-xs my-2">
//                     <div className="label">
//                       <span className="label-text">Last Name:</span>
//                     </div>
//                     <input
//                       type="text"
//                       value={lastName}
//                       className="input input-bordered w-full max-w-xs"
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                   </label>
//                   <div className="label">
//                     <span className="label-text">Photo URL :</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={photoUrl}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setPhotoUrl(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Age:</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={age}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setAge(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Gender:</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={gender}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setGender(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">About:</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={about}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setAbout(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <p className="text-red-500">{error}</p>
//               <div className="card-actions justify-center m-2">
//                 <button className="btn btn-primary" onClick={saveProfile}>
//                   Save Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <UserCard
//           user={{ firstName, lastName, photoUrl, age, gender, about }}
//         />
//       </div>
//       {showToast && (
//         <div className="toast toast-top toast-center">
//           <div className="alert alert-success">
//             <span>Profile saved successfully.</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default EditProfile;
