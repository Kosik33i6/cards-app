import React from 'react';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './ColumnItem.scss';

const truncate = (string) => string.substring(0, 6) + '...';

const ColumnItem = ({title, icon}) => {

  if(title.length > 6) {
    title = truncate(title);
  }

  return (
    <li className={styles.component}>
      <span className={styles.title}>{title}</span>
      <span className={styles.icon}>
        <Icon name={icon}/>
      </span>
    </li>
  );
};

ColumnItem.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.node,
};

ColumnItem.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default ColumnItem;
