import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { BASE_URL } from "../utils/constants";

const Request = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.request);

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections/requests", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (error) {
      console.error("Failed to fetch requests:", error);
    }
  };
  const handleRequest = async (status, _id) => {
    const res = await axios.post(
      BASE_URL + "/request/review/" + status + "/" + _id,
      {},
      {
        withCredentials: true,
      }
    );
  };

  useEffect(() => {
    getRequests();
  }, []);
  console.log(selector);

  if (!selector) return <h1>Loading...</h1>;
  if (selector.length === 0)
    return (
      <h1 className="flex text-2xl font-bold justify-center mt-4">
        No requests found 😢
      </h1>
    );

  return (
    <div className="flex flex-wrap pb-20">
      {selector.map((e) => {
        const { photoURL, firstName, lastName, about } = e.fromUserID;
        return (
          <div key={e._id} className="flex m-5">
            <div className="card bg-base-300 w-96 h-100 shadow-sm">
              <figure>
                <img src={photoURL} className="h-50" alt="User" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {firstName}
                  <div className="badge badge-secondary">{lastName}</div>
                </h2>
                <p className="mb-1">{about}</p>
                <div className="mt-5 flex item-center justify-center">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => handleRequest("accepted", e._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => handleRequest("rejected", e._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
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
//     const res = await axios.get(
//       BASE_URL + "/user/connections/requests",

//       {
//         withCredentials: true,
//       }
//     );

//     console.log(res.data.data[0]._id);

//     dispatch(addRequest(res.data.data));
//   };
//   // const handleRequest = async (status, _id) => {
//   //   const res = await axios.post(
//   //     `${BASE_URL}/request/review/${status}/${_id}`,
//   //     {},
//   //     { withCredentials: true }
//   //   );
//   // };
//   useEffect(() => {
//     getRequests();
//   }, []);
//   console.log(selector[0]._id);

//   if (!selector) return;
//   if (selector.length === 0) return <h1>No requests found</h1>;
//   return (
//     <div>
//       {selector.map((e) => {
//         const { photoURL, firstName, lastName, skills, about } = e.fromUserID;
//         return (
//           <div key={e._id} className="flex m-5">
//             <div className="card bg-base-300 w-96 h-100 shadow-sm">
//               <figure>
//                 <img src={photoURL} className="h-50" alt="User" />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">
//                   {firstName}
//                   <div className="badge badge-secondary">{lastName}</div>
//                 </h2>
//                 <p className="mb-1">{about || "This is my dummy about "}</p>
//                 <div className="mt-5 flex item-center justify-center">
//                   <button className="btn btn-primary mx-2">Accept</button>
//                   <button className="btn btn-secondary mx-2">Reject</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );

// return (
//   selector && (
//     <div
//       className="flex
//      m-5"
//     >
//       <div className="card bg-base-300 w-96 h-100 shadow-sm">
//         <figure>
//           <img
//             src={selector[0]?.fromUserID?.photoURL}
//             className="h-50"
//             alt="Shoes"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {selector[0]?.fromUserID?.firstName}
//             <div className="badge badge-secondary">
//               {selector[0]?.fromUserID?.lastName}
//             </div>
//           </h2>
//           <p className="mb-1">
//             {selector[0]?.fromUserID?.about || "This is my dummy about "}
//           </p>
//           <div>
//             <ul className="mt-1 m-0 p-0  list-disc list-inside">
//               {selector[0]?.fromUserID?.skills.map((e) => (
//                 <li>{e}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="mt-5 flex item-center justify-center">
//             <button
//               className="btn btn-primary mx-2"
//               onClick={() => {
//                 handleRequest("accepted");
//               }}
//             >
//               Accept
//             </button>
//             <button className="btn btn-secondary mx-2">Reject</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// );
//};
//export default Request;
