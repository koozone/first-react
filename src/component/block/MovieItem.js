import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CSS = {
	MovieItem: styled.div`
		display: flex;
		flex-direction: row;
		padding: 10px;
	`,
	CoverImage: styled.img`
		height: fit-content;
	`,
}

function MovieItem({item}) {
	return (
		<div>
			<CSS.MovieItem>
				<CSS.CoverImage src={item.medium_cover_image} alt={item.title} />
				<div>
					<h2><Link to={`/movie/${item.id}`}>{item.title}</Link></h2>
					<p>{item.summary}</p>
					<ul>
						{item.genres.map((m, i) => (
							<li key={i}>{m}</li>
						))}
					</ul>
				</div>
			</CSS.MovieItem>
		</div>
	);
}

export default MovieItem;