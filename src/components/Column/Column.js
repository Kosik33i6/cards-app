import React, { Component } from 'react';
import { settings } from '../../data/dataStore';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

import PropTypes from 'prop-types';

import styles from './Column.scss';
class Column extends Component {
    static propTypes = {
      title: PropTypes.string,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }
    state = {
      cards: this.props.cards || [],
    }

    addCard(title) {
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
              title,
            },
          ],
        }
      ));
    }
    render() {

      const {title} = this.props;
      const {cards} = this.state;

      const cardsComponent = cards.map(({key, ...card}) => (
        <Card key={key} {...card}/>
      ));
      console.log(this.props);
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={this.props.icon}/>
            </span>
          </h3>
          {cardsComponent}
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </section>
      );
    }
}

export default Column;
