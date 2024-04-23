import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(false)
const [page,setPage]=useState(1)
const [totalResult,setTotalResult]=useState(0)

useEffect(()=>{componentDidMount()},[])

const  componentDidMount = async()=>{
  props.setProgress(10);
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

  setLoading(true)
  let data= await fetch(url);
  let parsedData=await data.json()
  props.setProgress(100);
  setArticles(parsedData.articles);
  setTotalResult(parsedData.totalResults);
  setLoading(false)
  setPage(page+1)
}

const fetchMoreData = async()=>{
  console.log("fetch1",page)
  setPage(page+1)
  console.log("fetch2",page)
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true);
  console.log("pagesize",props.pageSize)
  let data= await fetch(url);
  let parsedData=await data.json()
  // console.log(articles)
  setArticles(articles.concat(parsedData.articles))
  // setArticles(parsedData.articles)
  // console.log("article",articles.length-props.pageSize)
  
  setTotalResult(parsedData.totalResults)
  console.log(articles)
  
//   setLoading(false)//may be error
}

    return (
      <>
        <h2 className='text-center'>Top Headlines</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=totalResult}
          loader={<Spinner/>}
          
        >
        <div className="container">
          <div className="row">
          {articles.map((element)=>{
              return <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title!=null?(element.title.length<=45?element.title:element.title.slice(0,45)):element.title} description={element.description!=null?(element.description.length<=88?element.description:element.description.slice(0,88)):element.description} imageUrl={!element.urlToImage?"https://static.toiimg.com/thumb/msid-108223511,width-1070,height-580,imgsize-161362,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":element.urlToImage} readMore={element.url} author={element.author} date={element.publishedAt}
              key={element.url}/>
            </div>

          })}
          </div>
        </div>
        </InfiniteScroll>
        
        </>
    )
  
}
News.defaultProps = {
  country:"in",
  pageSize:8,
  category:"general"
}
News.propTypes = {
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string,
}
export default News
