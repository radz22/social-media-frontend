import { Link } from "react-router-dom";
import GetPost from "../../services/post/get-all-post";
import { useState } from "react";
import PostContentModal from "../modal/post-content-modal";
const Post = () => {
  const { postData, postLoading } = GetPost();
  const [id, setId] = useState<string | null>("");
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
    setId(null);
  };
  const handleOpen = (id: string) => {
    setId(id);
    setOpen(true);
  };
  return (
    <div>
      <div>
        {postData?.map((item: any) => (
          <div className="mt-10 bg-white h-auto p-4 rounded-xl w-full	">
            <div className="flex items-center justify-between">
              <Link to={`/user/${item.userid}`}>
                <div className="flex items-center gap-5">
                  <div>
                    <img
                      src={item?.userphoto}
                      className="w-[45px] h-[45px] rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold">{item?.name}</h1>
                  </div>
                </div>
              </Link>
              <div className="bg-[#f5f5f5] p-3 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-2xl "
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <p
                className="text-[#000] text-sm leading-7 font-medium	 "
                onClick={() => handleOpen(item?.id)}
              >
                {item?.text}
              </p>
            </div>

            <div className="mt-5 w-full">
              {item?.photo == "" ? (
                ""
              ) : (
                <img
                  src={item?.photo}
                  className="w-full h-64	rounded-lg md:h-96	lg:h-72 xl:h-[400px]		"
                  onClick={() => handleOpen(item?.id)}
                />
              )}
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="p-2 rounded-full cursor-pointer bg-[#e4e4e4]">
                {item?.userid == "77da0e7c-ed96-453d-a3b5-2e28fe8f67ba" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                    className="text-xl "
                  >
                    <path
                      fill="#f8312f"
                      d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-xl text-[#e93838]"
                  >
                    <path
                      fill="currentColor"
                      d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className="text-[#212529] text-sm font-semibold">Heart</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-2xl  "
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#212529] text-sm font-semibold">Comment</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <PostContentModal id={id} handleClose={handleClose} open={open} />
      </div>
    </div>
  );
};

export default Post;
