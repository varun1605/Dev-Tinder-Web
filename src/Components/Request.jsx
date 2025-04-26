import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/RequestSlice";
import { BASE_URL } from "../utils/constants";

const Request = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.request);
  const getRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/connections/requests", {
      withCredentials: true,
    });
    // console.log(res.data.data);

    dispatch(addRequest(res.data.data));
  };
  useEffect(() => {
    getRequests();
  }, []);
  console.log(selector[0]?.fromUserID?.firstName);

  if (!selector) return;
  if (selector.length === 0) return <h1>No requests found</h1>;
  return (
    selector && (
      <div className="flex  m-5">
        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <img src={selector[0]?.fromUserID?.photoURL} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {selector[0]?.fromUserID?.firstName}
              <div className="badge badge-secondary">
                {selector[0]?.fromUserID?.lastName}
              </div>
            </h2>
            <p>{selector[0]?.fromUserID?.about || "This is my dummy about "}</p>
            <div className="card-actions justify-end">
              <ul>
                {selector[0]?.fromUserID?.skills.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Request;

// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addRequest } from "../utils/RequestSlice";
// import { BASE_URL } from "../utils/constants";

// const Request = () => {
//   const dispatch = useDispatch();
//   const selector = useSelector((store) => store.request);

//   const getRequests = async () => {
//     const res = await axios.get(BASE_URL + "/user/connections/requests", {
//       withCredentials: true,
//     });

//     dispatch(addRequest(res.data.data));
//   };

//   useEffect(() => {
//     getRequests();
//   }, []);

//   console.log(selector[0]?.fromUserID?.firstName); // <-- safe now

//   if (!selector) return null;
//   if (selector.length === 0) return <h1>No requests found</h1>;

//   return (
//     <div className="flex m-5">
//       <div className="card bg-base-300 w-96 shadow-sm">
//         <figure>
//           <img
//             src={
//               selector[0]?.fromUserID?.photoURL ||
//               "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             }
//             alt="Profile"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {selector[0]?.fromUserID?.firstName || "Unknown"}
//             <div className="badge badge-secondary">NEW</div>
//           </h2>
//           <p>
//             {selector[0]?.fromUserID?.skills?.join(", ") ||
//               "No skills mentioned"}
//           </p>
//           <div className="card-actions justify-end">
//             <div className="badge badge-outline">Fashion</div>
//             <div className="badge badge-outline">Products</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Request;
