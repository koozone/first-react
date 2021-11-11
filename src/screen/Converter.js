import { useState } from "react";

function Converter() {
	const [amount, setAmount] =  useState(0);
	const [toggle, setToggle] =  useState(false);
	const changeAmount = (event) => {
		setAmount(event.target.value);
	}
	const clickToggle = (event) => {
		setToggle(value => !value);
		setAmount(0);
	}

	return (
		<div>
			<h2>Converter</h2>
			<form>
				<label>hour : </label>
				<input type="number" value={toggle ? amount / 60 : amount} onChange={changeAmount} disabled={toggle} />
				<br/>
				<label>minute : </label>
				<input type="number" value={toggle ? amount : amount * 60} onChange={changeAmount} disabled={!toggle} />
				<br/>
				<button type="button" onClick={clickToggle}>Toggle</button>
			</form>
		</div>
	);
}

export default Converter;