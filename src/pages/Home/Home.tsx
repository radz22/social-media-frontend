import React, { useEffect, useState } from "react";
import Header from "../../components/home-header/Header";
import RingLoader from "react-spinners/RingLoader";
import Footer from "../../components/footer/Mobile-Footer";
import LeftSide from "../../components/side-bar/LeftSide";
import RightSide from "../../components/side-bar/RightSide";
import Post from "../../components/post/Post";
import CreatePost from "../../components/create-post/CreatePost";
import { Toaster } from "react-hot-toast";
import SearchBoxAtom from "../../hooks/modal-atom/search-box-atom";
import GetProfile from "../../services/profile/get-profile-token";
import { socket } from "../../services/message/messages";
const Home = () => {
  const [friendReq, setFriendReq] = useState<any[]>([
    {
      name: "Anthony Daugloi ",
      image: "https://uitheme.net/sociala/images/user-7.png",
    },
    {
      name: "Mohannad Zitoun  ",
      image: "https://uitheme.net/sociala/images/user-8.png",
    },
    {
      name: "Hugury Daugloi   ",
      image: "https://uitheme.net/sociala/images/user-12.png",
    },
  ]);
  const { handleCloseSearchBox } = SearchBoxAtom();
  const { profile } = GetProfile();

  useEffect(() => {
    socket.emit("notifications", {
      roomid: profile?.userid,
      id: null,
      userpostid: null,
      postid: null,
      commentuserid: null,
      commentprofile: null,
      commentname: null,
      date: null,
    });
  });
  return (
    <div className="w-full">
      <div className="h-[100%] w-full bg-[#f7f7f7] ">
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <div className="fixed top-0 left-0 w-full bg-white  z-50">
          <Header />
        </div>
        <div
          className="lg:w-full lg:flex  lg:gap-2 h-auto "
          onClick={handleCloseSearchBox}
        >
          <div className="lg:w-[30%] max-lg:hidden xl:w-[20%] xl:mr-10 ">
            <LeftSide />
          </div>

          <div className="pt-[10px] w-full px-5 scroll-smooth h-auto py-20 lg:w-[50%]   lg:px-1 xl:w-[55%]">
            <>
              <CreatePost />
            </>
            <div className="mt-10 w-full ">
              <>
                <Post />
              </>
            </div>
            <div className="mt-10 bg-white h-auto p-4 rounded-xl flex items-center justify-center ">
              <RingLoader
                color="#1e74fd"
                loading={true}
                size={35}
                className="p-3"
              />
            </div>

            <div className="mt-10 bg-white h-auto p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#212529] font-bold">
                    Friend Request
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1e74fd] font-semibold">
                    See all
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-[#adb5bd ] mt-6"></div>
              <div className="mt-5">
                <div>
                  {friendReq.map((item: any) => (
                    <div>
                      <div className="flex items-center gap-5 mt-8">
                        <div>
                          <img
                            src={item.image}
                            className="w-[50px] h-[50px] rounded-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-[#212529] text-sm font-bold">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 mt-5">
                        <div className="bg-[#1e74fd] py-2 px-6 rounded-3xl		">
                          <button className="text-sm font-semibold  text-white">
                            Confirm
                          </button>
                        </div>
                        <div className="bg-[#eee] py-2 px-6 rounded-3xl		">
                          <button className="text-sm font-semibold ">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[20%] max-lg:hidden">
            <RightSide />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full   z-50 lg:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
