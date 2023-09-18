import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

export default function NewsContainer(props) {

  const [articles, setArticles] = useState([]);

  // This will execute when app is launched for the first time
  useEffect(() => {
    
    if (!props.country) {
      alert("Please select a country");
      return;
    }

    const myUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=622ff393c45f48d28abb721f3ffc6362&pageSize=100`;

    // Use async/await to fetch and parse the data
    const fetchData = async () => {
      try {
        const response = await fetch(myUrl);
        const data = await response.json();
        setArticles(data.articles);
      } 
      catch (error) {
        console.error("Something caused error while fetching data:", error);
      }
    };

    fetchData();        // Call the fetchData function when the component mounts
    }, [props.category, props.country]);        // Include the category in dependency array. Dependency array is an array of dependencies that the useEffect should watch for changes.


  return (
    <div className="container text-center my-5">
      <div className="row">
        {articles.map((article, index) => (
          <div className="col" key={index}>
            <NewsItem newsUrl={article.url} title={article.title} description={article.description} imageUrl={article.urlToImage} author={article.author} date={article.publishedAt} theme={props.theme}/>
          </div>
        ))}
      </div>
    </div>
  );
}
