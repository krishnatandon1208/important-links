import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const data = [
	{
		name: 'Cheatsheet for regular expression',
		websitelink: 'https://ihateregex.io/'
	},
	{
		name: 'Beautiful, free illustrations',
		websitelink: 'https://www.drawkit.io/'
	},
	{
		name: 'Find free fonts',
		websitelink: 'https://fontflipper.com/'
	},
	{
		name: 'Expose localhost to the internet with public url',
		websitelink: 'https://ngrok.com/'
	},
	{
		name: 'Free to use fake online REST API for testing and prototyping',
		websitelink: 'http://jsonplaceholder.typicode.com/'
	}
];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
        color: "#F6F6F6",
        backgroundColor: "#212121",
		transition: "0.5s",

        "&:hover": {
            backgroundColor: "#383838",   
        }
	}
}));

export default function CardBlock() {
    const classes = useStyles();
	return (
		<React.Fragment>
			{data.map((item) => (
				<Grid item xs={12} sm={4} key={`${item.name}-key`}>
					<Paper className={classes.paper}>
						<Typography variant={'h6'}>{item.name}</Typography>
						<a href={item.websitelink} target="_blank" rel="noreferrer">
							{item.websitelink}
						</a>
					</Paper>
				</Grid>
			))}
		</React.Fragment>
	);
}
