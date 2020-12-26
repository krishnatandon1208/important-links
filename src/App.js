import React from 'react';
import { Container, Grid, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import Cardblock from './Cardblock/CardBlock';

import './App.css';

function App() {
	return (
		<Container>
			<AppBar position="fixed">			
				<Toolbar variant="dense" className="jc-center site-header">
					<IconButton edge="start" color="inherit" aria-label="Useful web links">
						<PublicIcon />
					</IconButton>
					<Typography variant={'h5'}>Useful WEB Links</Typography>
					<IconButton edge="end" color="inherit" aria-label="Useful web links">
						<PublicIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<main className="main-block">
				<Grid container spacing={3}>
					<Typography variant={'subtitle2'} className="site-note">
						Info: This site content will be updated time to time. All links are owned by individual site owners and this
						site don't hold the responsibility for any changes in the given links.
					</Typography>
					<Cardblock />
				</Grid>
			</main>
		</Container>
	);
}

export default App;
