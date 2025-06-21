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
  if (feed.length <= 0)
    return (
      <h1 className="flex justify-center text-4xl">
        No new users are available
      </h1>
    );
  return (
    feed && (
      <div className="flex flex-wrap justify-center gap-4 my-8">
        <UserCard user={feed[0]} />
        {/* {feed.map((e) => (
          <UserCard user={e} />
        ))} */}
      </div>
    )
  );
};
export default Feed;
