import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';

const SearchResults = (props) => {
  console.log(props);
  return (
    <div className={styles.component}>
      <div className={styles.item}>
        {props.cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;
