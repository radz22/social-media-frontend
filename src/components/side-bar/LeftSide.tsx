import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <div className="lg:block h-screen  fixed top-[106px]  left-0 z-30 px-2 lg:w-[30%] xl:w-[20%]">
      <div className="bg-white h-auto p-4 rounded-xl 	">
        <div>
          <h1 className="text-sm text-[#adb5bd] font-semibold">News Feeds</h1>
        </div>
        <Link to="/user/1">
          <div className="flex items-center mt-5 gap-4">
            <div className="p-1">
              <img
                src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/453773231_3739405146387963_5511635015299107138_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeES3pA4pjKFbCjin0SWPbSPzz0zBlHZIfrPPTMGUdkh-h1BU27T_WctUPNPM3BvXnYqW0Mew6A4gQrCso5F0EdF&_nc_ohc=R-P5P1wKPScQ7kNvgEDw5xe&_nc_ht=scontent.fmnl17-3.fna&oh=00_AYAQDvo_Mm2ixhSIPaqPhNLtvJyIVL3gEZPu0eERCRZW0A&oe=66BAA952"
                className="w-[40px] h-[40px] rounded-full "
              />
            </div>
            <div>
              <p className="text-[16px] font-semibold text-[#888]">
                Radz Santillan
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center mt-5 gap-4">
          <div className="bg-[#061b9a] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-white"
            >
              <rect width="24" height="24" fill="none" />
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                <path d="m17 2l-5 5l-5-5" />
              </g>
            </svg>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-[#888]">Newsfeed</p>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-4">
          <div className="bg-[#061b9a] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
              className="text-white text-2xl"
            >
              <rect width="32" height="32" fill="none" />
              <path
                fill="currentColor"
                d="M9 7c-3.3 0-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6 6 0 0 0 29 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.06 8.06 0 0 0 16 21.125a8.06 8.06 0 0 0-3.469-3.281A6 6 0 0 0 15 13c0-3.3-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4m14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4"
              />
            </svg>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-[#888]">
              Suggest Friends
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-auto p-4 rounded-xl mt-5 	">
        <div>
          <h1 className="text-sm text-[#adb5bd] font-semibold">Account</h1>
        </div>

        <div className="flex items-center mt-5 gap-4">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
              className="text-2xl text-[#adb5bd]"
            >
              <rect width="1024" height="1024" fill="none" />
              <path
                fill="currentColor"
                d="m960.496 415.056l-82.129-18.224c-6.4-20.48-14.784-40.08-24.4-58.927l44.431-74.032c16.592-26.512 24.976-65.52 0-90.512l-45.28-45.248c-24.976-24.992-67.151-20.496-92.623-2.832l-72.032 45.887c-18.689-9.696-38.225-18-58.529-24.56l-18.431-83.12C605.999 33.009 579.343 0 543.999 0h-64c-35.344 0-57.008 33.504-64 64l-20.528 82.128c-21.68 6.912-42.496 15.744-62.336 26.208l-73.84-47.024c-25.456-17.664-67.648-22.16-92.624 2.832l-45.264 45.248c-24.992 25.008-16.608 64 0 90.512l46.752 77.92c-8.767 17.664-16.544 35.936-22.544 55.024l-82.112 18.224C33.007 420.56 0 447.216 0 482.56v64c0 35.344 33.504 57.008 64 64l83.152 20.784c5.745 17.632 12.928 34.56 21.056 50.976l-46.8 78c-16.591 26.496-24.975 65.504 0 90.496l45.28 45.248c24.976 25.008 67.152 20.496 92.624 2.847l74-47.152c19.952 10.528 40.88 19.44 62.704 26.337L416.495 960c7.008 30.496 28.656 64 64 64h64c35.344 0 62-33.007 67.504-63.504l18.464-83.343c20.096-6.496 39.376-14.689 57.84-24.257l72.192 46c25.472 17.664 67.664 22.16 92.624-2.848L898.4 850.8c24.976-25.008 16.592-64 0-90.496l-44.463-74.128c8.944-17.568 16.688-35.84 22.912-54.848L960 610.56c30.496-7.008 64-28.656 64-64v-64c0-35.344-32.992-62-63.504-67.504m-.465 126.992c-2.72 1.952-7.842 4.635-14.338 6.139l-118.656 29.631l-11.008 33.632c-4.975 15.153-11.407 30.529-19.119 45.712l-16.064 31.569l62.688 104.528c4 6.4 5.872 12.127 6.432 15.503l-42.096 42.033c-4.064-1.28-8.688-2.945-10.912-4.464l-105.344-67.184l-32.752 16.945c-15.776 8.192-31.969 14.976-48.097 20.192l-34.88 11.28l-26.368 119.12c-1.216 6.368-4.624 11.504-6.96 13.344h-57.6c-1.951-2.72-4.623-7.84-6.112-14.32L449.39 827.9l-34.095-10.817c-17.569-5.536-35.088-12.912-52.144-21.904l-32.912-17.376l-105.36 67.152c-4.304 2.912-8.912 4.56-13.088 4.56l-41.968-40.847c.56-3.311 2.304-8.783 5.792-14.367l65.456-109.056l-15.568-31.344c-7.264-14.784-13.024-28.656-17.504-42.4l-10.992-33.664L79.518 548.46c-7.392-1.68-12.736-4.432-15.52-6.4v-59.504a.3.3 0 0 0 .145.032c1.072 0 6.336-3.745 10.72-4.544l120.72-26.737l11.087-35.28c4.512-14.368 10.672-29.344 18.816-45.775l15.568-31.36l-64.767-107.92c-4.016-6.432-5.872-12.16-6.432-15.52l42.08-42.065c4.08 1.312 8.672 2.96 10.88 4.48l107.312 68.4l32.88-17.344c16.88-8.895 34.336-16.239 51.904-21.823l34.016-10.832L478.11 79.501c1.697-7.391 4.416-12.735 6.4-15.52H544c-.433.657 3.68 6.24 4.527 10.865l26.88 121.408l34.848 11.264c16.336 5.28 32.752 12.16 48.72 20.448l32.752 17.008l103.152-65.712c4.32-2.945 8.944-4.576 13.088-4.576l42 40.816c-.56 3.328-2.32 8.816-5.808 14.416l-63.344 105.488l16.16 31.616c8.72 17.056 15.376 33.056 20.32 48.928l11.056 35.344L946.64 477.55c7.153 1.328 12.721 5.456 13.905 7.696zM512.43 319.674c-106.272 0-192.736 86.288-192.736 192.32c0 106.016 86.464 192.304 192.736 192.304s192.736-86.288 192.736-192.304c0-106.032-86.464-192.32-192.736-192.32m-.432 320.32c-70.576 0-128-57.424-128-128c0-70.592 57.424-128 128-128c70.592 0 128 57.408 128 128c0 70.576-57.424 128-128 128"
              />
            </svg>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-[#888]">Settings</p>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-4">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-[#adb5bd]"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                d="M20 7c1.25 1.67 2 3.75 2 6c0 5.52-4.48 10-10 10S2 18.52 2 13S6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-[#888]">Analytics</p>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-4">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-[#adb5bd]"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-[#888]">Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
