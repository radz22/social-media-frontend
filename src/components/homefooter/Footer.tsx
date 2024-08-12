import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-3 px-3 transition-all duration-400 ease-in lg:py-5 lg:px-5 bg-[#1e74fd] ">
      <div className="flex items-center justify-between">
        <div className="p-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-3xl text-white cursor-pointer"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
              />
            </svg>
          </div>
        </div>
        <div>
          <img
            src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/453773231_3739405146387963_5511635015299107138_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeES3pA4pjKFbCjin0SWPbSPzz0zBlHZIfrPPTMGUdkh-h1BU27T_WctUPNPM3BvXnYqW0Mew6A4gQrCso5F0EdF&_nc_ohc=R-P5P1wKPScQ7kNvgEDw5xe&_nc_ht=scontent.fmnl17-3.fna&oh=00_AYAQDvo_Mm2ixhSIPaqPhNLtvJyIVL3gEZPu0eERCRZW0A&oe=66BAA952"
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
