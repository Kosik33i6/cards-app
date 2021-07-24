import React, { Component } from 'react';
import styles from './MenuHamburger.scss';

class MenuHamburger extends Component {
  state = {
    isActive: false,
  }

  toggleActive = () => {

    this.setState({
      isActive: !this.state.isActive,
    });

  }

  render() {
    const {isActive} = this.state;

    return (
      <div className={styles.component}>
        <div onClick={this.toggleActive} className={`${styles.hamburger} ${isActive && styles.active}`}>
          <div className={styles.icon}></div>
        </div>
        <ul className={`${styles.list} ${isActive && styles['list--visible']}`}></ul>
      </div>
    );
  }
}

export default MenuHamburger;
