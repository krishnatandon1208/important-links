import React from "react";
import { Typography, Grid } from '@material-ui/core';

const data = [
    {
        name: "Cheatsheet for regular expression",
        websitelink: "https://ihateregex.io/"
    },
    {
        name: "Beautiful, free illustrations",
        websitelink: "https://www.drawkit.io/"
    },
    {
        name: "Find free fonts",
        websitelink: "https://fontflipper.com/"
    },
    {
        name: "Expose localhost to the internet with public url",
        websitelink: "https://ngrok.com/"
    },
    {
        name: "Free to use fake online REST API for testing and prototyping",
        websitelink: "http://jsonplaceholder.typicode.com/"
    }
];

export default function CardBlock() {
    return (

        <Grid item xs={12} sm={6} className="card-block">
            {
                data.map((item) =>
                <div className="card-block-item" key={`${item.name}-key`}>
                    <Typography variant={"h6"}>{item.name}</Typography>
                    <a href={item.websitelink} target="_blank" rel="noreferrer">{item.websitelink}</a>
                </div> 
                )
            }
        </Grid>
    );
}
