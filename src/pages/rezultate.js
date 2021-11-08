import React, { useEffect } from "react";
import resultsImg from "../assets/results.jpg";
import PageTemplate from "../sections/pageTemplate";
import Footer from "../sections/footer";
import axios from "axios";
import FullResult from "../sections/fullResult";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Rezultate = ({ results }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Head>
        <title>RC Grivita - Ultimele rezultate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
