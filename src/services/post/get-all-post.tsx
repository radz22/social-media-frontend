import { useEffect, useState } from "react";
import { Post } from "../../types/post-type";
const getPost = () => {
  const [postData, setPostData] = useState<Post[]>([]);
  const [postLoading, setPostLoading] = useState<boolean>(false);
  useEffect(() => {
    const FetchPost = async () => {
      setPostLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/post/get`);
        if (!response.ok) {
          console.log("error");
        }
        const result: Post[] = await response.json();
        setPostData(result);
      } catch {
        console.log("catch error");
      } finally {
        setPostLoading(false);
      }
    };
    FetchPost();
  }, []);

  return { postData, postLoading };
};

export default getPost;
