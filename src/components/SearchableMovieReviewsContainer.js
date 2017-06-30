import React, { Component } from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch'

const NYT_API_KEY = '2219b3fbf7c649d5bf2745d60aae6494'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleInputChange (event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  fetchSearch (event) {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  render () {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.fetchSearch}>
          <input type='text' onChange={this.handleInputChange}/>
          <button type='submit'>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
