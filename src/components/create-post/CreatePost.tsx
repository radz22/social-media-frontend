import GetProfile from "../../services/profile/get-profile-token";
const CreatePost = () => {
  const { profile } = GetProfile();

  return (
    <div className="mt-24 bg-white h-auto p-4 rounded-xl 	">
      <div className="flex items-center gap-2 ">
        <div className="bg-[#f5f5f5] p-2 rounded-full	 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className="text-xl text-[#1e74fd]"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path stroke-linecap="round" d="M7 42h36" />
              <path d="M11 26.72V34h7.317L39 13.308L31.695 6z" />
            </g>
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[#adb5bd] text-sm">Create Post</p>
        </div>
      </div>
      <div className="relative mt-5">
        <div className="absolute top-0 z-20 px-2 py-2 ">
          <img
            src={profile?.profile}
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <div className="relative ">
          <textarea
            className="font-semibold w-full px-12 py-3 h-[110px]   border-2 border-[#f1f1f1]  text-[#adb5bd] rounded-2xl	 placeholder-[#adb5bd]"
            placeholder="What's on your mind?"
          ></textarea>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-5">
        <div className="md:flex md:items-center md:gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-[#10d876]"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </g>
            </svg>
          </div>
          <div>
            <p className="md:block text-sm font-semibold text-[#495057] max-md:hidden">
              Photo/Video
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center md:gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-[#fe9431]"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 18V9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2" />
                <circle cx="12" cy="13" r="3" />
              </g>
            </svg>
          </div>
          <div>
            <p className="md:block text-sm font-semibold text-[#495057] max-md:hidden">
              Feeling/Activity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
