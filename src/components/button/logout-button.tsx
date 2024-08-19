import cookies from "../../utils/cookies/cookies";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    cookies.remove("id");
    cookies.remove("login");
    cookies.remove("token");
    navigate("/");
    window.location.reload();
  };
  return { handleLogout };
};

export default Logout;
