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
      <div className="-mt-10 pb-10">
        {results
          .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
          .map((result) => (
            <FullResult key={result.id} result={result} />
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
