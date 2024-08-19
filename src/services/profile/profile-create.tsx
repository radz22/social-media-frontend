import { profiletype } from "../../types/profile-type";
const ProfileCreate = async (profileData: profiletype) => {
  const response = await fetch("http://localhost:5000/profile/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error);
  }
  return result;
};

export default ProfileCreate;
