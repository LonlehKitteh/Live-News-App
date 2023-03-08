import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
    // fetch the news data
    const news: NewsResponse = await fetchNews(categories.join(","));

    console.log(news);

    return <div className="text-3xl font-bold underline"></div>;
}

export default Homepage;
