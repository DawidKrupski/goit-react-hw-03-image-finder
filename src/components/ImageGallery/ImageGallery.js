import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends React.Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <ul className={css.gallery}>
          <ImageGalleryItem images={images} />
        </ul>
      </>
    );
  }
}
