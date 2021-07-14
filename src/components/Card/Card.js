import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './Card.scss';

class Card extends Component {
    static propTypes = {
        title: PropTypes.string,
    }
    render() {
        return (
            <div className={styles.component}>
                {this.props.title}
            </div>
         );
    }
}

export default Card;