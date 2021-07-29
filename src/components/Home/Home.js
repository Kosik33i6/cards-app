import React from 'react';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';
import ListCreator from '../ListCreator/ListCreator';
import Navigation from '../MenuHamburger/NavigationContainer';
import {listCreatorData} from '../../data/dataStore';
import styles from './Home.scss';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }
  render() {
    const {title, subtitle, lists, addList} = this.props;
    const listsComponent = lists.map(listData => (
      <ListLink key={listData.id} {...listData} />
    ));
    return (
      <main className={styles.component}>
        <Navigation/>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {listsComponent}
        <ListCreator inputs={listCreatorData.inputs} action={addList}/>
      </main>
    );
  }
}

export default Home;
