import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import Navbar from "../../component/Navbar/Navbar";
import Quizcard from "../../component/Quizcard/Quizcard";

const Home = () => {
  const [category, setCategory] = useState([]);

    useEffect(() => {
        const quizzes = async () => {
          let url = process.env.REACT_APP_CATEGORYQUIZ_API;
          try {
            const {data}  = await axios.get(url);
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
