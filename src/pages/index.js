import FrontPage from "../sections/frontPage";
import Header from "../sections/header/header";
import BlogPosts from "../sections/blogPosts";
import axios from "axios";
import Stats from "../sections/stats";
import Pagination from "../sections/pagination";

export default function Home({ posts, nextMatch, teams, results }) {
  return (
    <div>
      <FrontPage nextMatch={nextMatch} />
      <Stats results={results} nextMatch={nextMatch} />
      <BlogPosts posts={posts} />
      <Pagination />
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
    const resTeams = await axios.get(`${URL_API}/teams`);
    const teams = resTeams.data;
    const resResults = await axios.get(`${URL_API}/results`);
    const results = resResults.data;

    return {
      props: { posts, nextMatch, teams, results },
    };
  } catch (error) {
    console.log(error);
  }
}
