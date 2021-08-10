import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";

const PaginationBar = ({ pageNum, setPageNum, totalPageNum }) => {
  const handleChange = (event, value) => {
    event.preventDefault();
    setPageNum(value);
  };
  return (
    <>
      <Typography>Page: {pageNum}</Typography>
      <Pagination count={totalPageNum} page={pageNum} onChange={handleChange} />
    </>
  );
};

export default PaginationBar;
