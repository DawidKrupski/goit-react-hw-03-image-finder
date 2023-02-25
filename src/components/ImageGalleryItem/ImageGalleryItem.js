import React from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(({ id, webformatURL }) => (
          <li key={id} className="galleryItem">
            <img
              className={css['galleryItem-image']}
              src={webformatURL}
              alt=""
            />
          </li>
        ))}
      </>
    );
  }
}
