import React from "react";
import Button from "@material-ui/core/Button";

const Pagination = ({ page, setPage, total }) => {
	const totalPages = Math.ceil(total / 100);

	return (
		<div style={{ marginTop: "20px", textAlign: "center" }}>
			<Button disabled={page <= 1} onClick={() => setPage(page - 1)} variant="outlined" shape="rounded">
				&lt;
			</Button>

			{[...Array(totalPages)].map((_, index) => (
				<Button
					key={index}
					onClick={() => setPage(index + 1)}
					disabled={page === index + 1}
          variant="outlined" shape="rounded"
				>
					{index + 1}
				</Button>
			))}

			<Button disabled={page >= totalPages} onClick={() => setPage(page + 1)} variant="outlined" shape="rounded">
				&gt;
			</Button>
		</div>
	);
};

export default Pagination;
