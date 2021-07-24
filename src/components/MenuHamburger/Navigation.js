import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItemContainer';
import styles from './Navigation.scss';

class Navigation extends Component {

  static propTypes = {
    lists: PropTypes.array,
  }

  state = {
    isActive: false,
  }

  handleToggleActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    const {isActive} = this.state;
    const {lists} = this.props;

    const listsComponent = lists.map((listData) => (
      <ListItem key={listData.id} {...listData}/>
    ));

    return (
      <div className={styles.component}>
        <div onClick={this.handleToggleActive} className={`${styles.hamburger} ${isActive && styles.active}`}>
          <div className={styles.icon}></div>
        </div>
        <ul className={`${styles.list} ${isActive && styles['list--visible']}`}>
          {listsComponent}
        </ul>
      </div>
    );
  }
}

export default Navigation;
