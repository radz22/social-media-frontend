import { useState } from "react";
import { forgotpasswordtype } from "../../types/forgot-password-type";
import UpdatePassword from "../../services/user/update-password";
import { useNavigate } from "react-router-dom";
const UpdatePasswordHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleChangePassword = async (
    password: forgotpasswordtype,
    id: string
  ) => {
    try {
      await UpdatePassword(password, id);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleChangePassword, loading };
};

export default UpdatePasswordHook;
