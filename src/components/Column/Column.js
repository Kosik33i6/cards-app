import React, { Component } from 'react';

import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

import PropTypes from 'prop-types';

import styles from './Column.scss';
class Column extends Component {
    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {

      const {title, icon, cards} = this.props;
      console.log('this.props in column: ', this.props);
      console.log();

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
          {/* <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/> */}
        </section>
      );
    }
}

export default Column;
