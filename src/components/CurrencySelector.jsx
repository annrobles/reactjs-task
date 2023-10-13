import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select, MenuItem } from "@material-ui/core";

const CurrencySelector = ({ monetaryUnit, setMonetaryUnit }) => {
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
			.then((response) => {
				setCurrencies(response.data);
			})
			.catch((error) => {
				console.error("Error fetching the currencies", error);
			});
	}, []);

	return (
    <Select value={monetaryUnit} onChange={(e) => setMonetaryUnit(e.target.value)}>
      {currencies.map(currency => (
        <MenuItem key={currency} value={currency}>
          {currency.toUpperCase()}
        </MenuItem>
      ))}
    </Select>
	);
};

export default CurrencySelector;
