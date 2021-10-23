import React from "react";
import Trophies from "../sections/trophies";
import axios from "axios";
import historyImg from "../assets/players.jpg";
import PageTemplate from "../sections/pageTemplate";
import Footer from "../sections/footer";
import ReactMarkdown from "react-markdown";

const Istorie = ({ history, trophies }) => {
  return (
    <div>
      <PageTemplate pageCover={historyImg} pageTitle={"Istoria Clubului"} />

      <div className="container mx-auto pb-20 flex flex-col justify-center items-center">
        <div className="px-5 text-xl font-normal max-w-3xl leading-normal">
          {" "}
          <ReactMarkdown children={history.Content} className="line-break" />
        </div>
        <Trophies trophies={trophies} />
      </div>

      <Footer />
    </div>
  );
};

export default Istorie;

export async function getStaticProps() {
  try {
    const URL_API = process.env.BACKEND_ADDRESS;

    const resHistory = await axios.get(`${URL_API}/history`);
    const history = resHistory.data;

    const resTrophies = await axios.get(`${URL_API}/trophies`);
    const trophies = resTrophies.data;

    return {
      props: { history, trophies },
    };
  } catch (error) {
    console.log(error);
  }
}
