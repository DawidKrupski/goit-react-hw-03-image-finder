import React from 'react';
import css from './Button.module.css';

export class Button extends React.Component {
  render() {
    const { handleLoadMore } = this.props;
    return (
      <div className={css.btn}>
        <button onClick={handleLoadMore} className={css.button}>
          Load More
        </button>
      </div>
    );
  }
}
