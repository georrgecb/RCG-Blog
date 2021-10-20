import React from "react";
import SinglePost from "../components/singlePost";

const BlogPosts = ({ posts }) => {
  return (
    <section className="bg-gray-50">
      <div className="container  flex-wrap lg:flex-nowrap gap-5 mx-auto p-10 flex justify-between items-center">
        {posts &&
          posts.map((post) => (
            <SinglePost
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
