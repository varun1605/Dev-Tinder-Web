import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { displayUserFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const result = await axios.get("http://localhost:8080/user/feed", {
        withCredentials: true,
      });
      dispatch(displayUserFeed(result?.data));
    } catch (err) {}
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center my-8">
        <UserCard user={feed[1]} />
      </div>
    )
  );
};
export default Feed;
