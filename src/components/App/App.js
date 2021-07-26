import React from 'react';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import ListCreator from '../ListCreator/ListCreator';
import Navigation from '../MenuHamburger/NavigationContainer';
import {DragDropContext} from 'react-beautiful-dnd';
import {listCreatorData} from '../../data/dataStore';
import styles from './App.scss';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }
  render() {
    const {title, subtitle, lists, addList} = this.props;
    const listsComponent = lists.map(listData => (
      <List key={listData.id} {...listData} />
    ));
    const moveCardHandler = result => {
      console.log(result);
    };
    return (
      <main className={styles.component}>
        <Navigation/>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search/>
        <DragDropContext onDragEnd={moveCardHandler}>
          {listsComponent}
        </DragDropContext>
        <ListCreator inputs={listCreatorData.inputs} action={addList}/>
      </main>
    );
  }
}

export default App;
