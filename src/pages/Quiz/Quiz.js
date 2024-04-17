import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../component/Navbar/Navbar";
import Qna from "../../component/QNA/QNA";
import {quizCategory, useAuth} from "../../context/Auth-context";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const { quizCategory } = useAuth();

    useEffect(() => {
        const quizData = async () => {
            let url = process.env.REACT_APP_QUIZ_API;
            try {
                const {data} = await axios.get(url);
                setQuiz(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };
        quizData();
    },[]);

    return (
        <Fragment>
            <Navbar />
            {
                quiz.map((quiz) => {
                    return (
                        <Qna quizdata={quiz} key={quiz._id} />
                    )
                })
            }
        </Fragment>
    );
}

export default Quiz;
