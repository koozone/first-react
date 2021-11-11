import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from 'styled-components';

const CSS = {
	Container: styled.div`
		max-width: 500px;
	`,
	MovieInfo: styled.div`
		display: flex;
		flex-direction: column;
		padding: 10px;
	`,
	CoverImage: styled.img`
		height: fit-content;
	`,
}

function MovieDetail() {
	const [loading, setLoading] = useState(true);
	const [movieDetail, setMovieDetail] = useState(null);
	const param = useParams();

	const getMovieDetail = async () => {
		const json = await (await fetch(
			`https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`
		)).json();

		setMovieDetail(json.data.movie);
		setLoading(false);
	}

	useEffect(() => {
		getMovieDetail();
	}, [])
	console.log(param);
	console.log(movieDetail);

	return (
		<CSS.Container>
			<h1>MovieDetail</h1>
			{loading ? <strong>Loading...</strong> : null}
			{movieDetail ? 
				<CSS.MovieInfo>
					<CSS.CoverImage src={movieDetail.large_cover_image} />
					<div>
						<h2>{movieDetail.title}</h2>
						<p>{movieDetail.description_full}</p>
						<ul>
							{movieDetail.genres.map((m, i) => (
								<li key={i}>{m}</li>
							))}
						</ul>
					</div>
				</CSS.MovieInfo>
				:
				null
			}
		</CSS.Container>
	);
}

export default MovieDetail;