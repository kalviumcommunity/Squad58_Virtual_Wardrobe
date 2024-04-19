import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import YourCloset from "./components/YourCloset";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/YourCloset" element={<YourCloset />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
