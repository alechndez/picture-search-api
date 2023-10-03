import React, { Component } from 'react'
import { TextField } from '@mui/material'
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ImageResults from '../image-results/ImageResults'

class Search extends Component {
  state = {
      searchText: '',
      amount: 15,
      apiUrl: 'https://pixabay.com/api',
      apiKey: '39761536-349269e67928bac9adf3ad6f2',
      images: []
  }
  onTextChange = (e) => {
    const val = e.target.value
    const { apiUrl, apiKey, searchText, amount } = this.state;
    this.setState({[e.target.name]: val});
    if(val ===''){
      this.setState({images:[]})
    }else{
      axios({
        method: 'get',
        url: apiUrl,
        params: {
          key: apiKey,
          q: searchText,
          image_type: 'photo',
          per_page: amount,
          safesearch: true,
        },
      })
        .then((res) => {
          this.setState({ images: res.data.hits });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    
  };  
  onAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };  
 
  render() {
    console.log(this.state.images)
    return (
      <div>
          <TextField
            variant="outlined"
            value={this.state.searchText}
            onChange={this.onTextChange}
            label="Search"
            fullWidth={true}
            name="searchText"
          />
          <br/>
          <Box sx={{ minWidth: 1000 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="amount-select-label">Amount</InputLabel>
        <Select
          labelId="amount-select-label"
          id="amount-select"
          value={this.state.amount}
          label="Amount"
          onChange={this.onAmountChange}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
    {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
      </div>
    )
  }
}

export default Search