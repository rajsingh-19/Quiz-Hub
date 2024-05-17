import React from "react";
import "../QNA/qna.css";

const Qna = ({ quizdata }) => {
  const [currentQuiz] = quizdata;

  const {title, quiz} = currentQuiz;
  console.log(currentQuiz);
  // console.log(quizdata);

  return (
    <main className="container flex dir-row justify-center items-center">
      <section className="qna-container m-t">
        <div className="text1 text-center">Subject {title}</div>
        <div className="flex dir-row p-t10 justify-sp-btwn">
          <p className={`float-l`}>Question: 1/10</p>
          <p className="float-r">Score: 0</p>
        </div>
        <div className="p-t10">Q:1 fehvfkbr</div>
        <div className="flex dir-col justify-center p-t">
          <button className="m-t10 p10 b-r-10 cursor">A</button>
          <button className="m-t10 p10 b-r-10 cursor">B</button>
          <button className="m-t10 p10 b-r-10 cursor">C</button>
          <button className="m-t10 p10 b-r-10 cursor">D</button>
        </div>
        <div className="flex dir-row justify-center p-t">
          <button className="p10 b-r-10 cursor">Quit</button>
          <button className="p10 b-r-10 cursor">Next</button>
        </div>
      </section>
    </main>
  );
};

export default Qna;
