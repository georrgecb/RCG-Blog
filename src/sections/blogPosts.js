import React from "react";
import SinglePost from "../components/singlePost";

const BlogPosts = ({ posts }) => {
  return (
    <section className="bg-gray-50 px-5 pt-0 pb-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
        {posts &&
          posts.map((post) => (
            <SinglePost
              latest={post.latest}
              key={post.id}
              title={post.Title}
              content={post.Content}
              cover={post.Cover[0]}
              slug={post.Slug}
              date={post.createdAt}
            />
          ))}{" "}
      </div>
    </section>
  );
};

export default BlogPosts;
