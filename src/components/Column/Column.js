import React from 'react';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import {Droppable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import styles from './Column.scss';

const Column = ({title, icon, cards, addCard, id}) => {
  const cardsComponent = cards.map((cardData) => (
    <Card key={cardData.id} {...cardData}/>
  ));

  const DroppableComponent = (
    <Droppable droppableId={id}>
      {provided => (
        <div
          className={styles.cards}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {cardsComponent}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <section className={styles.component}>
      <h3 className={styles.title}>
        {title}
        <span className={styles.icon}>
          <Icon name={icon}/>
        </span>
      </h3>
      {DroppableComponent}
      <Creator text={settings.cardCreatorText} action={addCard}/>
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.node,
  addCard: PropTypes.func,
  id: PropTypes.string,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
