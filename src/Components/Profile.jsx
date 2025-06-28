// import { useSelector } from "react-redux";
// import { BASE_URL } from "../utils/constants";
// import UserCard from "./UserCard";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import EditProfile from "./EditProfile";

// const Profile = () => {
//   const user = useSelector((store) => store.user);
//   console.log("Redux user state:", user);
//   return (
//     user && (
//       <div className="flex justify-center p-4 ">
//         <EditProfile user={user} />
//       </div>
//     )
//   );
// };
// export default Profile;
// Profile.jsx
import EditProfile from "./EditProfile";

const Profile = () => {
  return (
    <div className="flex justify-center p-4 ">
      <EditProfile />
    </div>
  );
};

export default Profile;
