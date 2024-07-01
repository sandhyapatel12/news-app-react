import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from 'react'

const News = (props) => {

  //set values
  const[articles, setArticles] = useState([]);    //data store in array format
  const[loading, setloading] = useState(true);
  const[page, setpage] = useState(1);
  const[totalResults, settotalResults] = useState(0);

  
//handle next-previous news
const UpdateNews = async() => 
{
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db05f367358d45499b78de4206e44976&page=${page}`;
  setloading(true);
  let response = await fetch(url);    //getting data from api
  let parsedData = await response.json();   //geted data convert into json format
  setArticles(parsedData.articles)    //geted data store 
  settotalResults(parsedData.totalResults)  //geted total result store 
  setloading(false);    //after geted data spinner is hidden
 
}

useEffect(() =>
{
  document.title = `${props.category} - FASTNEWS`;    //display title of news on tab
  UpdateNews();
}, [])

const fetchMoreData = async() => {
 
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db05f367358d45499b78de4206e44976&page=${page+1}`;
  setpage(page + 1)
  let response = await fetch(url);
  let parsedData = await response.json();
  setArticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)
};



  return (
    <>
    <h1 className=" text-3xl text-center font-bold text-yellow-800 mt-8">
      {props.toptitle}
    </h1>
    
    {/* if loading is true then display spinner otherwise not */}
    {loading && <Spinner />}

    <div className="max-w-7xl flex items-center justify-center mx-auto mt-5 mb-10">
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length != totalResults}
      loader={<Spinner />}
    >
     
      {/* main news container --> for center */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-10 mt-10 ">
      
        {/* outer news boxes */}
        {!loading && articles.map((e) => {            {/* if data is not dispay and   taking load then display spinner otherwise display data */}
            return (
            <div
              className="border border-yellow-700 "
              key={e.url}
            >
              <NewsItem
                newsTitle={e.title ? e.title.slice(0, 40) : ""}   //display only 40 characters of title
                newsDesc={e.description ? e.description.slice(0, 100) : ""}     //display only 40 characters of description
                newsImageUrl={e.urlToImage}
                newsUrl={e.url}
                newsdate={e.publishedAt}
                source={e.source.name}
              />
            </div>
            
          );
        })}
        
      </div>
      </InfiniteScroll>
    </div>
   
  </>
  )
}

//passing proptypes(in function based component declared in last)
News.defaultProps ={
 
  country: 'in',
  category: 'general'
} 

News.propTypes =
{
country: PropTypes.string,
category: PropTypes.string
}

export default News





  






