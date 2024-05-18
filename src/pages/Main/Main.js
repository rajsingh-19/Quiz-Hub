import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import Navbar from "../../component/Navbar/Navbar";
import Quizcard from "../../component/Quizcard/Quizcard";
import Loader from "../../component/Loader/Loader";
import Footer from "../../component/Footer/Footer";

const Main = () => {
  //        Using useState hook for storing the fetched data from an api
  const [category, setCategory] = useState([]);
  //        Loader for the time period until the data is not rendered on the broswer
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const quizzes = async () => {
      //    storing the api from .env file to url
      let url = process.env.REACT_APP_CATEGORYQUIZ_API;
      try {
      //    data destructing and storing in useState along with controlling over the loader component
        const { data } = await axios.get(url);
        setLoader(false);
        setCategory(data);
      } catch (error) {
        setLoader(false);
        console.log("Error", error);
      } finally {
        setLoader(false);
      }
    };
    //      invoking the fn at rendering on the browser
    quizzes();
    //      using array for control over the useEffect
  }, []);

  return (
    <Fragment>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="main grid">
            {category.map((category) => {
              return <Quizcard quizCategory={category} key={category._id} />;
            })}
          </main>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Main;
