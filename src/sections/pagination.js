import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ onChange, posts }) => {
  return (
    <div className="bg-black">
      <ReactPaginate
        previousLabel={"PV"}
        nextLabel={"NX"}
        breakLabel={"..."}
        pageCount={posts.length / 9}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        initialPage={0}
        onPageChange={onChange}
        pageClassName={
          "p-2 mx-2 text-center text-black font-bold text-lg flex justify-center items-center"
        }
        previousClassName={
          "arrow-page text-transparent text-4xl text-center flex justify-center items-center border-l-2 border-gray-300 mr-auto bg-local bg-center bg-no-repeat w-20 h-20 rotate-arrow"
        }
        nextClassName={
          "arrow-page text-transparent text-4xl text-center flex justify-center items-center border-l-2 border-gray-300 ml-auto bg-local bg-center bg-no-repeat w-20 h-20"
        }
        containerClassName={
          "mx-auto text-gray-600 bg-gray-200 flex items-center justify-between"
        }
        activeClassName={
          "p-2 w-10 h-10 text-center text-black text-lg font-bold flex justify-center items-center rounded-full border-2 border-gray-300"
        }
      />
    </div>
  );
};

export default Pagination;
