import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../../services/user/sign-up";
import { signuptype } from "../../types/sign-up-type";
import { profiletype } from "../../types/profile-type";
import ProfileCreate from "../../services/profile/profile-create";
const SignUpHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Correctly using useNavigate inside a hook

  const handleSignUp = async (userData: signuptype) => {
    setLoading(true);
    try {
      const data = await SignUp(userData);
      const profile: profiletype = {
        userid: data.id,
        name: data.username,
        profile:
          "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeEJZkgQANC53m1awSGpbQKyWt9TLzuBU1Ba31MvO4FTUM2kHEaYhNGDrCd902O5SpkImDvq6-d3n1Ps2teRAnxO&_nc_ohc=r2tL2d_l2n8Q7kNvgFYxbW_&_nc_ht=scontent.fmnl17-5.fna&oh=00_AYDGc43fC3ORSmjBGogQKdOfOm-MCPDhptUVstOPEMjO9w&oe=66E7F23A",
        background:
          "https://static.vecteezy.com/system/resources/thumbnails/011/913/922/small/abstract-pink-watercolor-background-pastel-soft-water-color-pattern-vector.jpg",
      };
      const profileData = await ProfileCreate(profile);
      console.log(profileData);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSignUp, loading };
};

export default SignUpHook;
