import React from "react";
import { profiletype } from "../../types/profile-type";
import { useState, useEffect } from "react";
const GetProfileId = (id: string) => {
  const [profile, setProfile] = useState<profiletype>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/profile/user/${id}`
        );

        if (!response.ok) {
          console.log("error");
        }
        const result: profiletype = await response.json();
        setProfile(result);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return { profile };
};

export default GetProfileId;
