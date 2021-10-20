import FrontPage from "../sections/frontPage";
import Header from "../sections/header/header";
import BlogPosts from "../sections/blogPosts";
import axios from "axios";

export default function Home({ posts }) {
  return (
    <div>
      <FrontPage />
      <BlogPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(`${process.env.BACKEND_ADDRESS}/posts`);
    const posts = response.data;

    return {
      props: { posts },
    };
  } catch (error) {
    console.log(error);
  }
}
