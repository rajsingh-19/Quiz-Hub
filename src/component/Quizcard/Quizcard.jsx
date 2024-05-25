import React from "react";
import "./quizcard.css";
import { useAuth } from "../../context/Auth-context";
import { useNavigate } from "react-router-dom";

const Quizcard = ({ quizCategory }) => {
  const { image, subject, description, category } = quizCategory;

  const { token, authDispatch } = useAuth();
  // const {authDispatch} = useAuth();
  // const token = localStorage.setItem("token");
  const navigate = useNavigate();

  const handlePlayQuiz = () => {
    if (token) {
      authDispatch({
        type: "CATEGORY",
        payload: category,
      });
      navigate("/quiz");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="quizcard-container grid">
      <div className="quizcard-div bg-neutral-200 rounded-xl">
        <img className="quiz-img rounded-t-xl" src={image} alt="quiz card image" />
        <div className="flex flex-col p-1">
          <p className="subject text-center text-xl font-bold">{subject}</p>
          <span className="description text-base text-zinc-700">{description}</span>
        </div>
        <div className="flex justify-center p-2">
          <button className="btn text-lg p-1 cursor-pointer bg-slate-600 text-neutral-200 rounded-lg px-3.5 font-medium" onClick={handlePlayQuiz}>
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quizcard;
