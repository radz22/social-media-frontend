import { useEffect, useState } from "react";
import { socket } from "../../services/message/messages";
import { notificationdata } from "../../types/notification-type";
import GetProfile from "../../services/profile/get-profile-token";
const NotificationSocket = () => {
  const [notificationData, setNotificationData] = useState<any[]>([]);
  const handleNotification = (notificationData: notificationdata) => {
    socket.emit("notifications", notificationData);
  };

  useEffect(() => {
    socket.on("notifications", (data) => {
      setNotificationData((prevData) => [...prevData, data]);
    });

    return () => {
      socket.off("notifications");
    };
  }, []);

  console.log(notificationData);

  return { notificationData, handleNotification };
};

export default NotificationSocket;
