import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
