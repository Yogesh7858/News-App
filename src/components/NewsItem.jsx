import React from 'react'
const NewsItem= (props)=> {
  
    let {title,description,imageUrl,readMore,author,date} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img  src={imageUrl} className="card-img-top" alt="..." style={{height:200}}/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small class="text-body-secondary"><strong>By</strong> {author?author:"Unknown"} on  {new Date(date).toGMTString()}</small></p>
                <a href={readMore} className="btn btn-primary btn-sm">Read More</a>
            </div>
            </div>
      </div>
    )
}

export default NewsItem
