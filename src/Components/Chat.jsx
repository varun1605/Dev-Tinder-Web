import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/Socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  console.log(targetUserId);
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const Name = user?.firstName;
  console.log(userId);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchChats = async () => {
    const chats = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    console.log(chats.data.messages);
    // const chatMessages = chats.data.messages.map((msg) => {
    //   return {
    //     firstName: msg.firstName,
    //     text: msg.text,
    //   };
    // });
    const chatMessages = chats.data.messages.map((msg) => ({
      Name: msg.senderId?.firstName,
      text: msg.text,
    }));

    setMessage(chatMessages);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("joinChat", { userId, targetUserId, Name });

    socket.on("messageReceived", ({ Name, text }) => {
      console.log(Name + " :" + text);
      setMessage((message) => [...message, { text, Name }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      Name,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[70vh] mt-10 w-1/2 mx-auto border-2 rounded-xl my-4">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {message.map((msg, index) => (
          <div
            key={index}
            className={`chat ${msg.Name === Name ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-header">{msg.Name}</div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
      </div>

      <div className="border-t p-2">
        <fieldset className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="input flex-1"
            placeholder="Type here"
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Chat;
