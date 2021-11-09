import { useEffect, useState } from "react";
import FrontPage from "../sections/frontPage";
import Header from "../sections/header/header";
import BlogPosts from "../sections/blogPosts";
import axios from "axios";
import Stats from "../sections/stats";
import Pagination from "../sections/pagination";
import Footer from "../sections/footer";
import Head from "next/head";

export default function Home({ posts, nextMatch, results }) {
  const [current, setCurrent] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState([]);

  useEffect(() => {
    const indexOfFirstPost = current * 6;
    setPostsPerPage(
      posts
        .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
        .map((post, index) =>
          index === 0 ? { ...post, latest: true } : { ...post, latest: false }
        )
        .slice(indexOfFirstPost, indexOfFirstPost + 6)
    );
  }, [current, posts]);

  const onChange = (page) => {
    setCurrent(page.selected);
  };

  return (
    <div>
      <Head>
        <title>RC Grivita</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header frontPage={true} />
      <FrontPage nextMatch={nextMatch} />
      <Stats results={results} nextMatch={nextMatch} />
      <BlogPosts posts={postsPerPage} />
      <Pagination onChange={onChange} posts={posts} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const URL_API = process.env.BACKEND_ADDRESS;

    const resPosts = await axios.get(`${URL_API}/posts`);
    const posts = resPosts.data;
    const resNext = await axios.get(`${URL_API}/next-match`);
    const nextMatch = resNext.data;
    const resResults = await axios.get(`${URL_API}/results`);
    const results = resResults.data;

    return {
      props: { posts, nextMatch, results },
    };
  } catch (error) {
    console.log(error);
  }
}
