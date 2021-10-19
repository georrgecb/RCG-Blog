import axios from "axios";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post.Title}</h2>
              <p>{post.Content}</p>
              <div style={{ height: "2rem" }}></div>
            </a>
          </Link>
        ))}
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
