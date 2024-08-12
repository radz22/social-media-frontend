import React, { useState } from "react";
import Header from "../../components/home-header/Header";
import RingLoader from "react-spinners/RingLoader";
import Footer from "../../components/footer/Mobile-Footer";
import LeftSide from "../../components/side-bar/LeftSide";
import RightSide from "../../components/side-bar/RightSide";
const Home = () => {
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
                <p className="font-semibold text-[#adb5bd] text-sm">
                  Create Post
                </p>
              </div>
            </div>
            <div className="relative mt-5">
              <div className="absolute top-0 z-20 px-2 py-2 ">
                <img
                  src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/453773231_3739405146387963_5511635015299107138_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeES3pA4pjKFbCjin0SWPbSPzz0zBlHZIfrPPTMGUdkh-h1BU27T_WctUPNPM3BvXnYqW0Mew6A4gQrCso5F0EdF&_nc_ohc=R-P5P1wKPScQ7kNvgEDw5xe&_nc_ht=scontent.fmnl17-3.fna&oh=00_AYAQDvo_Mm2ixhSIPaqPhNLtvJyIVL3gEZPu0eERCRZW0A&oe=66BAA952"
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
          <div className="mt-10 w-full ">
            {dataDashBoard.map((item: any) => (
              <div className="mt-10 bg-white h-auto p-4 rounded-xl w-full	">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div>
                      <img
                        src={item.image}
                        className="w-[45px] h-[45px] rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="font-semibold">{item.name}</h1>
                    </div>
                  </div>
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
                  <p className="text-[#adb5bd] text-sm leading-7	">
                    {item.content}
                  </p>
                </div>

                <div className="mt-5 w-full">
                  {item.postimage == "" ? (
                    ""
                  ) : (
                    <img
                      src={item.postimage}
                      className="w-full h-64	rounded-lg md:h-96	lg:h-72		"
                    />
                  )}
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <div className="p-2 rounded-full cursor-pointer bg-[#e4e4e4]">
                    {item.id == 1 ? (
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
                    <p className="text-[#212529] text-sm font-semibold">
                      {item.reactcount} Heart
                    </p>
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
                    <p className="text-[#212529] text-sm font-semibold">
                      {item.comments} Comment
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
