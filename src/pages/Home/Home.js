import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Featurepage from "../../component/Featurepage/Featurepage";
import Description from "../../component/Description/Description";
import Stats from "../../component/Stats/Stats";
import Cta from "../../component/Cta/Cta";
import Aboutus from "../../component/Aboutus/Aboutus";
import Team from "../../component/Team/Team";
import Testimonial from "../../component/Testimonial/Testimonial";
import Footer from "../../component/Footer/Footer";

const Home = () => {

  return (
    <div>
      <Navbar />
      <Featurepage />
      <Description />
      <Stats />
      <Cta />
      <Aboutus />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
