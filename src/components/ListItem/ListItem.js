import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import ColumnItem from '../ColumnItem/ColumnItem';
import {settings} from '../../data/dataStore';
import styles from './ListItem.scss';

class ListInVavigation extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    columns: PropTypes.array,
  }

  state = {  }
  render() {
    const {title, columns} = this.props;
    const columnsComponent = columns.map(columnData => (
      <ColumnItem key={columnData.id} {...columnData}/>
    ));
    return (
      <li className={styles.component}>
        <h6 className={styles.title}>{settings.listItem.listTitle}<span>{ReactHtmlParser(title)}</span></h6>
        <ul className={styles.sublist}>
          <p className={styles['sublist-title']}>{settings.listItem.sublistTitle}</p>
          {columnsComponent}
        </ul>
      </li>
    );
  }
}

export default ListInVavigation;
