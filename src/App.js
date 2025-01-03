import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/Sign-up" element={<SignUp />}/>
        <Route path="/forget-password" element={<ForgotPassword />}/>
        <Route path="/offers" element={<Offers />}/>

      </Routes>
    </Router>
  );
}

export default App;
