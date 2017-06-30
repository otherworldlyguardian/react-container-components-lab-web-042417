import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className='review-list'>
      {props.reviews.map(review =>
        <div className='review'>
          {review.display_title}
          {review.byline}
          {review.summary_short}
        </div>)
      }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
