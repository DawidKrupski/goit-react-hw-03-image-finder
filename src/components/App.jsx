import React from 'react';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';

const API_key = '13558836-548568db06f41293b437b04a2';

export class App extends React.Component {
  state = {
    search: '',
    images: [],
    currentPage: 1,
  };

  async getURL() {
    const url = `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.currentPage}&key=${API_key}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
    this.setState({
      images: response.data.hits,
    });
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    this.getURL();
  };

  handleNextPage = evt => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    console.log(this.state.currentPage);
  };

  handlePrevPage = evt => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
    console.log(this.state.currentPage);
  };

  handleInput = evt => {
    this.setState({
      search: evt.target.value,
    });
  };

  async componentDidMount() {
    this.getURL();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search.length !== this.state.search) {
      this.getURL();
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
        <Button
          currentPage={this.state.currentPage}
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
        />
      </>
    );
  }
}
