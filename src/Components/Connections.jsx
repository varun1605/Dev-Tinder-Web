import ConnectionCard from "./ConnectionCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.connection);
  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addConnections(res.data.filteredData));
    console.log(res.data.filteredData);
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (selector.length === 0) return <div>No connections found!</div>;

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="p-4 text-2xl font-bold">Connection requests</h1>
      </div>
      {selector.map((e) => (
        <ConnectionCard key={e._id} connection={e} />
      ))}
    </div>
  );
};
export default Connections;
