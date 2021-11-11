import { useEffect, useState } from "react";

function Coin() {
	const [loading, setLoading] = useState(true);
	const [coinList, setCoinList] = useState([]);

	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
		.then(response => response.json())
		.then(json => {
			// console.log(json);
			setCoinList(json);
			setLoading(false);
		})
	}, [])

	return (
		<div>
			<h2>Coin</h2>
			{loading ? <strong>Loading...</strong> : null}
			<ul>
				{coinList.map((item, index) => (
					<li key={index}>{item.name} : $ {item.quotes.USD.price}</li>
				))}
			</ul>
		</div>
	);
}

export default Coin;