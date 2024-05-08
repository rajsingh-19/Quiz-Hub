import { Fragment, useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "../../component/Navbar/Navbar";
import Qna from "../../component/QNA/QNA";
import {useAuth} from "../../context/Auth-context";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const { quizCategory } = useAuth();
    // console.log(quizCategory);
    
    useEffect(() => {
        const quizData = async () => {
            let url = process.env.REACT_APP_QUIZ_API;
            try {
                const {data: {data}} = await axios.get(url);
                const filteredData = data.filter(({category}) => category === quizCategory);
                setQuiz(filteredData);
                console.log(data);
                // console.log(filteredData);
            } catch (error) {
                console.error(error);
            }
        };
        quizData();
    },[]);

    return (
        <Fragment>
            {/* <Navbar /> */}
            <Qna />
            {/* {
                quiz.map((quiz) => {
                    return (
                        <Qna quizdata={quiz} key={quiz._id} />
                    )
                })
            } */}
        </Fragment>
    );
}

export default Quiz;
