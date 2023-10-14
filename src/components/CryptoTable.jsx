import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";

const CryptoPage = ({ monetaryUnit, currentPage }) => {
	const [data, setData] = useState([]);

	const formatCurrency = (amount, currencyCode) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currencyCode,
		}).format(amount);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				`https://api.coingecko.com/api/v3/coins/markets`,
				{
					params: {
						vs_currency: monetaryUnit,
						order: "market_cap_desc",
						per_page: 100,
						page: currentPage,
						sparkline: false,
						market_dominance: "market_cap",
						market_cap_change_percentage_24h_in_currency: monetaryUnit,
						price_change_percentage_24h_in_currency: monetaryUnit,
						market_cap_change_percentage_24h_in_currency: monetaryUnit,
						price_change_percentage: "1h,24h,7d",
					},
				}
			);
			const coinsData = result.data;
			setData(coinsData);
		};

		fetchData();
	}, [monetaryUnit, currentPage]);

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Coin</TableCell>
					<TableCell>Price</TableCell>
					<TableCell>1h</TableCell>
					<TableCell>24h</TableCell>
					<TableCell>7d</TableCell>
					<TableCell>24h Volume</TableCell>
					<TableCell>Mkt Cap</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map((coin) => (
					<TableRow key={coin.id}>
						<TableCell>{coin.name}</TableCell>
						<TableCell>
							{formatCurrency(coin.current_price, monetaryUnit)}
						</TableCell>
						<TableCell>
							{coin.price_change_percentage_1h_in_currency !== null
								? coin.price_change_percentage_1h_in_currency.toFixed(2)
								: ""}
						</TableCell>
						<TableCell>
							{coin.price_change_percentage_24h_in_currency !== null
								? coin.price_change_percentage_24h_in_currency.toFixed(2)
								: ""}
							%
						</TableCell>
						<TableCell>
							{coin.price_change_percentage_7d_in_currency !== null
								? coin.price_change_percentage_7d_in_currency.toFixed(2)
								: ""}
							%
						</TableCell>
						<TableCell>{coin.total_volume}</TableCell>
						<TableCell>{coin.market_cap}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default CryptoPage;
