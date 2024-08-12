import Header from "../../components/signin and signup/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import signupbg from "../../assets/signupbg.jpg";
import { forgotpasswordtype } from "../../types/forgotpasswordtype";
const ForgotPassword = () => {
  const { register, handleSubmit } = useForm<forgotpasswordtype>();
  const onSubmit: SubmitHandler<forgotpasswordtype> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full  h-screen  bg-[#f7f7f7]  ">
      <div className="xl:hidden max-xl:block">
        <Header />
      </div>
      <div className="xl:flex xl:items-center xl:justify-center xl:gap-10 xl:w-full">
        <div className="xl:block w-[40%] relative  max-xl:hidden ">
          <div className="absolute z-20">
            <Header />
          </div>
          <div className="relative">
            <img src={signupbg} className="w-full h-screen" />
          </div>
        </div>

        <div className="xl:w-[60%] w-full px-7  flex items-center justify-center flex-col mt-20 ">
          <div className="md:w-[400px] sm:w-[350px]">
            <div className="w-full ">
              <h1 className="text-3xl font-bold leading-tight text-left">
                Change <br /> your password
              </h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="relative ">
                <div className="absolute top-[18px] z-20 px-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    {...register("password")}
                    className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="relative mt-5">
                <div className="absolute top-[18px] z-20 px-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    {...register("confirmpassword")}
                    className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div className="w-full  mt-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="Accept"
                    name="fav_language"
                    value="HTML"
                    className=" rounded-2xl	"
                  />
                  <label htmlFor="Accept" className="text-sm	text-[#adb5bd]">
                    Accept Term and Conditions
                  </label>
                </div>
              </div>

              <div className="w-full mt-7">
                <div className="text-center ">
                  <button className="font-bold text-white h-[60px] bg-[#343a40] w-full rounded-lg	">
                    Register
                  </button>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-[#adb5bd]">
                    Already have account {""}
                    <Link to="/">
                      <span className="text-[#1e74fd] font-bold">Login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
