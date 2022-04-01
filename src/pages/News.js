import React from 'react';
import "./news.css"

export default function News() {
  return (
    <div className='newsContainer'>
        <div className="newsName">News</div>
        <div className="newsInfo">
            <div className="newsImage">NewsImage</div>
            <div className="newsContent">
                <span>NewsContent</span>
                <button className="more">More</button>
            </div>
        </div>
        <div className="newsLikeComments">
            <div className="newsLike">Like</div>
            <div className="newsComments">Comments</div>
        </div>
    </div>
  )
}
