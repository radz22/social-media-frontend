import SignIn from "../../services/user/sign-in";
import { useState } from "react";
import { signintype } from "../../types/sign-in-type";
import cookies from "../../utils/cookies/cookies";
import { useNavigate } from "react-router-dom";
const SignInHook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (userData: signintype) => {
    setLoading(true);

    try {
      const { login, token, id, verify, username, password } = await SignIn(
        userData
      );

      if (verify == "notverify") {
        cookies.set("username", username);
        setTimeout(() => {
          navigate(`/verify/${id}`);
        }, 2000);
      } else {
        cookies.set("login", login);
        cookies.set("token", token);
        cookies.set("id", id);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};

export default SignInHook;
