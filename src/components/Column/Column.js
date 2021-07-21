import React from 'react';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

import PropTypes from 'prop-types';

import styles from './Column.scss';

const Column = ({title, icon, cards, addCard}) => {
  const cardsComponent = cards.map((cardData) => (
    <Card key={cardData.id} {...cardData}/>
  ));

  return (
    <section className={styles.component}>
      <h3 className={styles.title}>
        {title}
        <span className={styles.icon}>
          <Icon name={icon}/>
        </span>
      </h3>
      {cardsComponent}
      <Creator text={settings.cardCreatorText} action={addCard}/>
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.node,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
