import React from 'react'

export default function NewsItem(props) {

  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
          <img src={props.imageUrl} className="card-img-top"/>
          <div className={`card-body bg-${props.theme} text-${props.theme === 'light'? 'dark': 'light'}`}>
            <h5 className="card-title"> {props.title? props.title.slice(0, 60) + '...': "No title available"} </h5>
            <p className="card-text"> {props.description? props.description.slice(0, 90) + '...': "No description available"} </p>
            <p className="card-text"><small className='text-muted'> {props.author? props.author: "Unknown"} </small> </p>
            <p className="card-text"><small className='text-muted'> Published At : {props.date? props.date: "Unknown Date"} </small> </p>
            <a href={props.newsUrl} className="btn btn-primary"> View Full News </a>
          </div>
      </div>
    </div>
  )
}
