import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Companydetail from "./pages/Companydetail/Companydetail";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quiz/Quiz";


function App() {
  
  return (
    <div className="app">
{/*       Wrapping and defining pages under routes for navigating    */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/companydetails" element={<Companydetail />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
