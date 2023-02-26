import React from 'react';
import css from './Button.module.css';

export class Button extends React.Component {
  render() {
    const { handleNextPage, handlePrevPage, currentPage, perPage } = this.props;
    return (
      <div className={css.buttons}>
        {currentPage > 1 ? (
          <button onClick={handlePrevPage} className={css.button}>
            Previous Page
          </button>
        ) : (
          ''
        )}
        {currentPage < 500 / perPage ? (
          <button onClick={handleNextPage} className={css.button}>
            Next Page
          </button>
        ) : (
          ''
        )}
      </div>
    );
  }
}
