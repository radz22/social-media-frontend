import React, { useState } from "react";
import Header from "../../components/home-header/Header";
import RingLoader from "react-spinners/RingLoader";
import Footer from "../../components/footer/Mobile-Footer";
import LeftSide from "../../components/side-bar/LeftSide";
import RightSide from "../../components/side-bar/RightSide";
import GetProfile from "../../services/profile/get-profile-token";
import Post from "../../components/post/Post";
import CreatePost from "../../components/create-post/CreatePost";
const Home = () => {
  const { profile } = GetProfile();
  const [dataDashBoard, setDataDashBoard] = useState<any[]>([
    {
      id: 1,
      image:
        "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/453773231_3739405146387963_5511635015299107138_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeES3pA4pjKFbCjin0SWPbSPzz0zBlHZIfrPPTMGUdkh-h1BU27T_WctUPNPM3BvXnYqW0Mew6A4gQrCso5F0EdF&_nc_ohc=R-P5P1wKPScQ7kNvgEDw5xe&_nc_ht=scontent.fmnl17-3.fna&oh=00_AYAQDvo_Mm2ixhSIPaqPhNLtvJyIVL3gEZPu0eERCRZW0A&oe=66BAA952",
      name: "Radz Santillan",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
      reactcount: 100,
      postimage:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg",
      comments: 20,
    },

    {
      id: 2,
      image: "https://uitheme.net/sociala/images/user-8.png",
      name: "Lesly Fajardo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
      reactcount: 18,
      postimage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzno8Fd0Lf97f4kCdT3WvZTTNL2whc8S_wHg&s",
      comments: 11,
    },

    {
      id: 3,
      image: "https://uitheme.net/sociala/images/user-12.png",
      name: "Mohannad Zitoun ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
      reactcount: 32,
      postimage:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
      comments: 5,
    },

    {
      id: 4,
      image: "https://uitheme.net/sociala/images/user-7.png",
      name: " Anthony Daugloi",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
      reactcount: 50,
      postimage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hmaR24UgKLCzSc48TPZD2lsQzzvDAI7R1w&s",
      comments: 9,
    },
    {
      id: 5,
      image: "https://uitheme.net/sociala/images/pt-1.jpg",
      name: " Surfiya Zakir",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
      reactcount: 10,
      postimage: "",
      comments: 2,
    },
  ]);

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

  return (
    <div className="h-[100%] w-full bg-[#f7f7f7]">
      <div className="fixed top-0 left-0 w-full bg-white  z-50">
        <Header />
      </div>
      <div className="lg:w-full lg:flex  lg:gap-2 h-auto ">
        <div className="lg:w-[30%] max-lg:hidden xl:w-[20%] xl:mr-10 ">
          <LeftSide />
        </div>

        <div className="pt-[10px] w-full px-5 scroll-smooth h-auto py-20 lg:w-[50%]   lg:px-1 xl:w-[55%]">
          <CreatePost />
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
                <p className="text-sm text-[#1e74fd] font-semibold">See all</p>
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
  );
};

export default Home;
