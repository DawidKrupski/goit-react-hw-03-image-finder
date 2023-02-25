import React from 'react';
import axios from 'axios';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const API_key = '13558836-548568db06f41293b437b04a2';
const search = '';
const url = `https://pixabay.com/api/?q=${search}&page=1&key=${API_key}&image_type=photo&orientation=horizontal&per_page=12`;

export class ImageGallery extends React.Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(url);
    this.setState({
      images: response.data.hits,
    });
  }

  render() {
    const { images } = this.state;
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem images={images} />
      </ul>
    );
  }
}
