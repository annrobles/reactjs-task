import React from "react";
import Button from "@material-ui/core/Button";

const Pagination = ({ page, setPage, total }) => {
	return (
		<div>
			{page > 1 && <Button onClick={() => setPage(page - 1)}>Previous</Button>}
			{page < total && <Button onClick={() => setPage(page + 1)}>Next</Button>}
		</div>
	);
};

export default Pagination;
