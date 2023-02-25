import React from 'react';
import css from './Button.module.css';

export class Button extends React.Component {
  render() {
    const { handleNextPage, handlePrevPage, currentPage } = this.props;
    return (
      <>
        {currentPage > 1 ? (
          <button onClick={handlePrevPage} className={css.button}></button>
        ) : (
          ''
        )}
        {currentPage < 41 ? (
          <button onClick={handleNextPage} className={css.button}></button>
        ) : (
          ''
        )}
      </>
    );
  }
}
