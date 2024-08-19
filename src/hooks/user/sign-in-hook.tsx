import SignIn from "../../services/user/sign-in";
import { useState } from "react";
import { signintype } from "../../types/sign-in-type";
import cookies from "../../utils/cookies/cookies";

const SignInHook = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (userData: signintype) => {
    setLoading(true);

    try {
      const { login, token, id } = await SignIn(userData);
      cookies.set("login", login);
      cookies.set("token", token);
      cookies.set("id", id);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};

export default SignInHook;
