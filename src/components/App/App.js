import React from 'react';

import PropTypes from 'prop-types';

import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';

import styles from './App.scss';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    const listsComponent = lists.map(listData => (
      <List key={listData.id} {...listData} />
    ));
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search/>
        {listsComponent}
      </main>
    );
  }
}

export default App;
