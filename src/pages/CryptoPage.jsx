import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import CryptoTable from "../components/CryptoTable";
import Pagination from "../components/Pagination";
import CurrencySelector from "../components/CurrencySelector";

const CryptoPage = () => {
	const [monetaryUnit, setMonetaryUnit] = useState("usd");
	const [page, setPage] = useState(1);

	return (
		<div>
			<CurrencySelector
				monetaryUnit={monetaryUnit}
				setMonetaryUnit={setMonetaryUnit}
			/>
			<CryptoTable monetaryUnit={monetaryUnit} />
			<Pagination page={page} setPage={setPage} total={10000} />
		</div>
	);
};

export default CryptoPage;
