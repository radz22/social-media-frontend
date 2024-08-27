import { profiletype } from "../../types/profile-type";
import ProfileCreate from "../../services/profile/profile-create";
import cookies from "../../utils/cookies/cookies";
import UseNavigate from "../../components/navigate/UseNavigate";
const ProfilleCreateHook = () => {
  const { handleNavigate } = UseNavigate();
  const handleCreateProfile = async (profileData: profiletype) => {
    try {
      await ProfileCreate(profileData);
      cookies.remove("username");
      handleNavigate();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { handleCreateProfile };
};

export default ProfilleCreateHook;
