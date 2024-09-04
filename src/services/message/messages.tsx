import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import GetProfile from "../profile/get-profile-token";
import SoundEffect from "../../assets/sound.mp3";
import { messagedata } from "../../types/message-type";
const socket = io("http://localhost:5000");

const GetMessage = (roomid: string) => {
  const { profile } = GetProfile();
  const [message, setMessage] = useState<messagedata[]>([]);
  const notificationSound = new Audio(SoundEffect); // Adjust path if needed

  useEffect(() => {
    const GetMessage = async () => {
      try {
        const response = await fetch(`http://localhost:5000/message/${roomid}`);
        if (!response.ok) {
          console.log("Error fetching messages from server");
          return;
        }
        const result = await response.json();
        setMessage(result); // Set initial messages from the server
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };
    GetMessage();
  }, [roomid]);

  useEffect(() => {
    socket.on("notification", (msg) => {
      notificationSound.play();
    });
    socket.on("receiver", (data) => {
      // Check if data is an array or a single message
      if (Array.isArray(data)) {
        setMessage((prevMessages) => [...prevMessages, ...data]); // Append multiple messages
      } else {
        setMessage((prevMessages) => [...prevMessages, data]); // Append a single message
      }
      console.log("New message received from socket:", data);
    });

    return () => {
      socket.off("receiver");
    };
  }, []);

  const handleMessage = (usermessages: string) => {
    socket.emit("sender", {
      roomid: roomid,
      userid: profile?.userid,
      message: usermessages,
    });
  };

  return { message, handleMessage };
};

export default GetMessage;
