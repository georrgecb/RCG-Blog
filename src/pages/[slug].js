import axios from "axios";
import Footer from "../sections/footer";
import PageTemplate from "../sections/pageTemplate";
import { useRouter } from "next/router";
import Loading from "../sections/loading";
import Markdown from "markdown-to-jsx";

const Post = ({ post, lastResult }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div>
      <PageTemplate
        lastResult={lastResult}
        pageCover={post.Cover[0].url}
        pageTitle={post.Title}
      />
      <div className="container mx-auto pb-20 flex justify-center items-center">
        <div className="px-5 text-xl font-normal max-w-3xl leading-normal">
          <Markdown>{post.Content}</Markdown>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  try {
    const response = await axios.get(`${process.env.BACKEND_ADDRESS}/posts`);
    const posts = response.data;

    const paths = posts.map((post) => ({
      params: { slug: post.Slug },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;

    const res = await axios.get(
      `${process.env.BACKEND_ADDRESS}/posts?Slug=${slug}`
    );
    const post = res.data[0];

    const resResults = await axios.get(
      `${process.env.BACKEND_ADDRESS}/results`
    );
    const lastIndex = resResults.data.length - 1;
    const lastResult = resResults.data[lastIndex];

    return { props: { post, lastResult } };
  } catch (error) {
    console.log(error);
  }
}
