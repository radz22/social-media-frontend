import { useState } from "react";
import RoomId from "../../services/message/room-id";
import { messagetype } from "../../types/message-type";
const RoomIdHook = () => {
  const [roomId, setRoomId] = useState<string>("");
  const handleRoomId = async (messageData: messagetype) => {
    try {
      const roomdid = await RoomId(messageData);
      setRoomId(roomdid);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { handleRoomId, roomId };
};

export default RoomIdHook;
