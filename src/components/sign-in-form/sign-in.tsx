import { signintype } from "../../types/sign-in-type";
import { useForm, SubmitHandler } from "react-hook-form";
import SignInHook from "../../hooks/user/sign-in-hook";
import { Link } from "react-router-dom";
import Button from "../button/button";

const SignIn = () => {
  const { register, handleSubmit } = useForm<signintype>();
  const { handleLogin } = SignInHook();
  const onSubmit: SubmitHandler<signintype> = (data) => {
    handleLogin(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="relative">
        <div className="absolute top-[18px] z-20 px-2  ">
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
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
            />
          </svg>
        </div>
        <div className="relative">
          <input
            {...register("username")}
            className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
            placeholder="Username"
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

      <div className="w-full flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            name="fav_language"
            value="HTML"
            className=" rounded-2xl	"
          />
          <label htmlFor="remember" className="text-sm	text-[#adb5bd ]">
            Remember me
          </label>
        </div>
        <div>
          <Link to="/recover">
            {" "}
            <p className="text-sm font-semibold text-[#495057 ]	">
              Forgot your Password?
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full mt-7">
        <div className="text-center ">
          <Button
            onButtonClick={handleSubmit(onSubmit)}
            classname="font-bold text-white h-[60px] bg-[#343a40] w-full rounded-lg"
            buttonname="Login"
          />
        </div>

        <div className="mt-3">
          <p className="text-sm text-[#adb5bd]">
            Dont have account{" "}
            <Link to="/signup">
              <span className="text-[#1e74fd] font-bold">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
