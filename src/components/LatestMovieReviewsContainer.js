import React, { Component } from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch'

const NYT_API_KEY = '2219b3fbf7c649d5bf2745d60aae6494'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

class LatestMovieReviewsContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount () {
    this.fetchLatest()
  }

  fetchLatest () {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  render () {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
