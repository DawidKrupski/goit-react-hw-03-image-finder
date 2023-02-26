import React from 'react';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

const API_key = '13558836-548568db06f41293b437b04a2';

export class App extends React.Component {
  state = {
    search: '',
    images: [],
    currentPage: 1,
    perPage: 12,
    error: null,
    isLoading: false,
  };

  async getURL() {
    const url = `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.currentPage}&key=${API_key}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`;
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(url);
      this.setState({
        images: response.data.hits,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    await this.setState({
      currentPage: 1,
    });
    this.getURL();
  };

  handleNextPage = async evt => {
    await this.setState({
      currentPage: this.state.currentPage + 1,
    });
    this.getURL();
  };

  handlePrevPage = async evt => {
    await this.setState({
      currentPage: this.state.currentPage - 1,
    });
    this.getURL();
  };

  handleInput = evt => {
    this.setState({
      search: evt.target.value,
    });
  };

  async componentDidMount() {
    this.getURL();
  }

  renderImages = () => {
    if (this.state.isLoading) {
      return <Loader />;
    } else if (!this.state.isLoading && this.state.images.length > 0) {
      return <ImageGallery images={this.state.images} />;
    } else if (this.state.error && !this.state.isLoading) {
      return <div>Something went wrong: {this.state.error}</div>;
    }
  };

  render() {
    return (
      <>
        <Searchbar
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        {this.renderImages()}
        {!this.state.isLoading ? (
          <Button
            currentPage={this.state.currentPage}
            handleNextPage={this.handleNextPage}
            handlePrevPage={this.handlePrevPage}
            perPage={this.state.perPage}
          />
        ) : null}
      </>
    );
  }
}
