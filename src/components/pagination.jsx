import React from "react";
import ReactPaginate from "react-paginate";
import '../scss/pagination/pagination.css'
function Pagination({onChangePage}) {
  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected+1)}
        pageRangeDisplayed={3}
        pageCount={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
