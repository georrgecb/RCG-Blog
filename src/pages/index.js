import FrontPage from "../sections/frontPage";
import { useEffect, useState } from "react";
import Header from "../sections/header/header";
import BlogPosts from "../sections/blogPosts";
import axios from "axios";
import Stats from "../sections/stats";
import Pagination from "../sections/pagination";
import Footer from "../sections/footer";

export default function Home({ posts, nextMatch, results }) {
  const [current, setCurrent] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState([]);

  useEffect(() => {
    const indexOfFirstPost = current * 9;
    setPostsPerPage(
      posts
        .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
        .map((post, index) =>
          index === 0 ? { ...post, latest: true } : { ...post, latest: false }
        )
        .slice(indexOfFirstPost, indexOfFirstPost + 9)
    );
  }, [current, posts]);

  const onChange = (page) => {
    setCurrent(page.selected);
  };

  return (
    <div>
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
