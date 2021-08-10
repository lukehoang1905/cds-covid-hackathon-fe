import { Pagination } from "@material-ui/lab";
import React from "react";

const PaginationBar = ({ pageNum, setPageNum, totalPageNum }) => {
  const handleChange = (event, value) => {
    event.preventDefault();
    setPageNum(value);
  };
  return (
    <>
      <Pagination
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        count={totalPageNum}
        page={pageNum}
        onChange={handleChange}
      />
    </>
  );
};

export default PaginationBar;
