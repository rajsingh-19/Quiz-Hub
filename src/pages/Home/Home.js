import { Fragment, useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../component/Navbar/Navbar";
import Quizcard from "../../component/Quizcard/Quizcard";

const Home = () => {
  const [category, setCategory] = useState([]);

    useEffect(() => {
        const quizzes = async () => {
          let url = "https://quizhub.cyclic.app/api/categoryQuiz"
          try {
            const response = await fetch(url);
            const data = await response.json();
            setCategory(data);
            console.log(data);
          } catch (error) {
            console.log("Error", error);
          }
        }
        quizzes();
    }, []);

    return (
        <Fragment>
            <Navbar />
            <main className="home grid">
              {
                category.map((category) => 
                {
                  return (<Quizcard quizcategory={category} key={category._id} />);
                })
              }
            </main>
        </Fragment>
    )
}

export default Home;
