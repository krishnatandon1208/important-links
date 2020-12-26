import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Cardblock from './Cardblock/CardBlock';

import './App.css';

function App() {
	return (
		<Container>
			<header>
				<Typography variant={'h3'}>Important WEB Links</Typography>
				<Typography variant={'caption'}>Links that make web development easy</Typography>
			</header>
			<main>
				<Grid container spacing={3}>
					<Cardblock />
				</Grid>
			</main>
			<footer>
				<Typography variant={'h6'}>
					Note: These links will be updated time to time. All links are owned by individual owners and this
					site don't hold the responsibility for any changes in the given links.
				</Typography>
			</footer>
		</Container>
	);
}

export default App;
