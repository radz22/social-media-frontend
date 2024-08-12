import Header from "../../components/signin-signup-header/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { signuptype } from "../../types/sign-up-type";
import { Link } from "react-router-dom";
import signupbg from "../../assets/signupbg.jpg";
import H1 from "../../components/h1/H1";
const Signup = () => {
  const { register, handleSubmit } = useForm<signuptype>();
  const onSubmit: SubmitHandler<signuptype> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full  h-screen  bg-[#f7f7f7] ">
      {" "}
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

        <div className="xl:w-[60%] w-full px-7  flex items-center justify-center flex-col mt-10 ">
          <div className="md:w-[400px] sm:w-[350px]">
            <div className="w-full ">
              <H1 classname="text-3xl font-bold leading-tight text-left">
                Create <br /> your account
              </H1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="relative">
                <div className="absolute top-[18px] z-20 px-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 1024 1024"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <path
                      fill="currentColor"
                      d="M511.728 64c108.672 0 223.92 91.534 223.92 159.854v159.92c0 61.552-25.6 179.312-94.256 233.376a63.99 63.99 0 0 0-23.968 57.809c2.624 22.16 16.592 41.312 36.848 50.625l278.496 132.064c2.176.992 26.688 5.104 26.688 39.344l.032 62.464L64 959.504V894.56c0-25.44 19.088-33.425 26.72-36.945l281.023-132.624c20.16-9.248 34.065-28.32 36.769-50.32c2.72-22-6.16-43.84-23.456-57.712c-66.48-53.376-97.456-170.704-97.456-233.185v-159.92C287.615 157.007 404.016 64 511.728 64m0-64.002c-141.312 0-288.127 117.938-288.127 223.857v159.92c0 69.872 31.888 211.248 121.392 283.088l-281.04 132.64S.001 827.999.001 863.471v96.032c0 35.344 28.64 63.968 63.951 63.968h895.552c35.344 0 63.968-28.624 63.968-63.968v-96.032c0-37.6-63.968-63.968-63.968-63.968L681.008 667.439c88.656-69.776 118.656-206.849 118.656-283.665v-159.92c0-105.92-146.64-223.855-287.936-223.855z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    {...register("name")}
                    className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="relative mt-5">
                <div className="absolute top-[18px] z-20 px-2  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M18.333 2.5c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 17.5 0 16.754 0 15.833V4.167C0 3.247.746 2.5 1.667 2.5zM7.168 11.328l-4.91 4.852h15.325l-4.857-4.802L10 13.265zM18.64 7.292l-4.796 3.316l4.796 4.736zm-17.279.061v7.836l4.686-4.631zm16.956-3.532H1.698a.36.36 0 0 0-.25.086a.26.26 0 0 0-.085.222v1.62L10 11.656l8.644-5.965V4.199q.001-.2-.092-.292a.3.3 0 0 0-.234-.086"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    {...register("email")}
                    className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
                    placeholder="Your Email Address"
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

export default Signup;
