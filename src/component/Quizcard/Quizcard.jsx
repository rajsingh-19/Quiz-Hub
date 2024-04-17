import React from "react";
import "./quizcard.css";
import { useAuth } from "../../context/Auth-context";
import { useNavigate } from "react-router-dom";

const Quizcard = ({ quizcategory }) => {

  const {token} = useAuth();
  // const token = localStorage.setItem("token");
  const navigate = useNavigate();

  const { image, subject, description } = quizcategory;
  
  const handlePlayQuiz = () => {
    if(token) {
      navigate("/quiz");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="quizcard-container">
      <div className="quizcard-div">
        <img className="quiz-img" src={image} alt="" />
        <div className="">
          <p className="subject">{subject}</p>
          <span className="description">{description}</span>
        </div>
        <button className="btn" onClick={handlePlayQuiz}>Play</button>
      </div>
    </div>
  );
};

export default Quizcard;
