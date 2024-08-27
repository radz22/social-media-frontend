import { useEffect, useState } from "react";
import { Post } from "../../types/post-type";
const GetPost = () => {
  const [postData, setPostData] = useState<Post[] | null>(null);
  const [postLoading, setPostLoading] = useState<boolean>(false);
  useEffect(() => {
    const FetchPost = async () => {
      setPostLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/post/get`);
        const result: Post[] = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        setPostData(result);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setPostLoading(false);
      }
    };

    FetchPost();
    const interval = setInterval(FetchPost, 3000);
    return () => clearInterval(interval);
  }, []);

  return { postData, postLoading };
};

export default GetPost;
