type Props = {
    news: NewsResponse;
};

import React from "react";
import Article from "./Article";

function NewsList({ news }: Props) {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gag-10">
            {news.data.map((article) => (
                <Article key={article.title} article={article} />
            ))}
        </main>
    );
}

export default NewsList;
