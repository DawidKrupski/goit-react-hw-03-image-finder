import React from 'react';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

const API_key = '13558836-548568db06f41293b437b04a2';
let search = '';
let url = `https://pixabay.com/api/?q=${search}&page=1&key=${API_key}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends React.Component {
  state = {
    search: '',
    images: [],
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const url = `https://pixabay.com/api/?q=${this.state.search}&page=1&key=${API_key}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
    this.setState({
      images: response.data.hits,
    });
  };

  handleInput = evt => {
    this.setState({
      search: evt.target.value,
    });
  };

  async componentDidMount() {
    const response = await axios.get(url);
    this.setState({
      images: response.data.hits,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search.length !== this.state.search) {
    }
  }
  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <ImageGallery images={images} />
      </>
    );
  }
}
