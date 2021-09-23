import { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Footer from "../components/footer/Footer";
const Home = () => {
  const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading0: "coconut mekong",
    heading1: "products you love and trust",
    paragraph:
      "We're committed to providing the best customer service possible",
  });
  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Coconut Mekong Vietnam</title>
        <meta
          name="description"
          content="Travel to the world with travel frirends"
        />
        <meta name="keywords" content="travel, travel tours, airline" />
      </Helmet>
      <Header
        heading0={state.heading0}
        heading1={state.heading1}
        paragraph={state.paragraph}
      >
        <button
          className="btn-default"
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerModel })}
        >
          More information
        </button>
      </Header>
      <Model current={registerModel}>
        <Register currentModel={loginModel} />
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel} />
      </Model>
      <Destinations />
      <Services />
      <Reviews />
      <GalleryComponent />
      <Footer />
    </>
  );
};
export default Home;
