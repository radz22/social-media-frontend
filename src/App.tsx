import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/sign-in/Signin";
import Signup from "./pages/sign-up/Signup";
import ForgotPassword from "./pages/forgot/ForgotPassword";
import RecoverAccount from "./pages/recover-account/RecoverAccount";
import Home from "./pages/home/Home";
import { Fragment } from "react/jsx-runtime";
import Setting from "./pages/setting/Setting";
import User from "./pages/user/User";
import cookies from "./utils/cookies/cookies";
function App() {
  const login = cookies.get("login");
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={login == "true" ? <Home /> : <Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot/:id" element={<ForgotPassword />} />
          <Route path="/recover" element={<RecoverAccount />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
