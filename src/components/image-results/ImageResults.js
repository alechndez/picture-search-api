import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ImageResults extends Component {
  render() {
    return (
      <div>ImageResults</div>
    )
  }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResults;