import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Converter from './screen/Converter';
import Coin from './screen/Coin';
import BoxOffice from './screen/BoxOffice';
import MovieDetail from './screen/MovieDetail';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/movie/:id">
					<MovieDetail />
				</Route>
				<Route path="/">
					<BoxOffice />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;