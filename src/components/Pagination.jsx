import React from "react";
import { useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);

  return (
    <Pagination
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1.5rem",
      }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;
