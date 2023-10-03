import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton'
import Zoom from '@mui/material/Zoom'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button'

class ImageResults extends Component {
  render() {
    let imageListContent;
    const {images} = this.props
    if(images){
      imageListContent= (
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map(img => (
          <ImageListItem key={img.id}>
            <img src={img.largeImageURL} alt=""/>
          </ImageListItem>
        ))}
      </ImageList>)
    } else{
      imageListContent = null;
    }
    return (
      <div>{imageListContent}</div>
    )
  }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResults;