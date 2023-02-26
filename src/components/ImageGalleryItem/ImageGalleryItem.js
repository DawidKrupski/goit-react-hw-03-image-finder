import React from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends React.Component {
  handleImageClick = () => {
    const { largeImageURL } = this.props;
    this.props.onClick(largeImageURL);
  };
  render() {
    const { id, webformatURL } = this.props;
    return (
      <li key={id} className={css.galleryItem}>
        <img
          className={css['galleryItem-image']}
          src={webformatURL}
          alt=""
          loading="lazy"
          onClick={this.handleImageClick}
        />
      </li>
    );
  }
}
