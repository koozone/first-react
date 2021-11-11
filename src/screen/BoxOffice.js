import { useEffect, useState } from "react";
import styled from 'styled-components';
import MovieItem from "../component/block/MovieItem";

const CSS = {
	
}

function BoxOffice() {
	const [loading, setLoading] = useState(true);
	const [movieList, setMovieList] = useState([]);

	const getMovieList = async () => {
		const json = await (await fetch(
			'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
		)).json();

		setMovieList(json.data.movies);
		setLoading(false);
	}

	useEffect(() => {
		getMovieList()
	}, [])
	console.log(movieList);
	
	return (
		<div>
			<h1>BoxOffice</h1>
			{loading ? <strong>Loading...</strong> : null}
			{movieList.map((item) => (
				<MovieItem item={item} key={item.id} />
			))}
		</div>
	);
}

export default BoxOffice;