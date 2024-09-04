import { chatBoxOpen } from "../../state/chat-box";
import { useAtom } from "jotai";
import GetProfileId from "../../services/profile/get-profile-id";
const ChatBoxModalAtom = () => {
  const [open, setOpen] = useAtom(chatBoxOpen);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCLose = () => {
    setOpen(false);
  };

  return { open, handleCLose, handleOpen };
};

export default ChatBoxModalAtom;
