import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import Navbar from "../../component/Navbar/Navbar";
import Quizcard from "../../component/Quizcard/Quizcard";
import Loader from "../../component/Loader/Loader";
import Footer from "../../component/Footer/Footer";

const Main = () => {
  const [category, setCategory] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const quizzes = async () => {
      let url = process.env.REACT_APP_CATEGORYQUIZ_API;
      try {
        const { data } = await axios.get(url);
        setLoader(false);
        setCategory(data);
        console.log(data);
      } catch (error) {
        setLoader(false);
        console.log("Error", error);
      } finally {
        setLoader(false);
      }
    };
    quizzes();
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
