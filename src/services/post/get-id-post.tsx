import { useEffect, useState } from "react";
import { Post } from "../../types/post-type";
const GetPostById = (id: string) => {
  const [postProfile, setPostProfile] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/post/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: Post[] = await response.json();
      setPostProfile(result);
    };
    fetchData();
  }, [id]);

  return { postProfile };
};

export default GetPostById;
