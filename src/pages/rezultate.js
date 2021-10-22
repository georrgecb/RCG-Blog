import React from "react";
import resultsImg from "../assets/results.jpg";
import PageTemplate from "../sections/pageTemplate";
import Footer from "../sections/footer";
import axios from "axios";
import FullResult from "../sections/fullResult";

const Rezultate = ({ results }) => {
  return (
    <div>
      <PageTemplate pageCover={resultsImg} pageTitle="Rezultate" />
      <div className="pb-20">
        {results.map((result) => (
          <FullResult result={result} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Rezultate;

export async function getStaticProps() {
  try {
    const URL_API = process.env.BACKEND_ADDRESS;

    const resResults = await axios.get(`${URL_API}/results`);
    const results = resResults.data;

    return {
      props: { results },
    };
  } catch (error) {
    console.log(error);
  }
}