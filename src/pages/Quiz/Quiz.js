import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Qna from "../../component/QNA/QNA";
import {useAuth} from "../../context/Auth-context";

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const { quizCategory } = useAuth();
    console.log(quizCategory);
    
    useEffect(() => {
        const quizData = async () => {
            // let url = process.env.REACT_APP_QUIZ_API;
            let url = process.env.REACT_APP_QUIZ_API;
            try {
                const {data: {data}} = await axios.get(url, {
                    headers: {Authorization: localStorage.getItem("token")}
                });
                // const { data } = await axios.get(url);
                console.log(data);
                const filteredData =  data && 
                data.length> 0 && 
                data.filter(({category}) => category === quizCategory);
                if (filteredData && filteredData.length > 0) {
                    
                }
                setQuiz(filteredData);
                // console.log(data);
                console.log(filteredData);
            } catch (error) {
                console.error(error);
            }
        };
        quizData();
    },[]);

    return (
        <Fragment>
            quiz page
            {/* <Qna /> */}
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
