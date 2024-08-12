import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/Forgot/ForgotPassword";
import RecoverAccount from "./pages/RecoverAccount/RecoverAccount";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/home" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot/:id" element={<ForgotPassword />} />
          <Route path="/recover" element={<RecoverAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
