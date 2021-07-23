import React from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';

import {settings} from '../../data/dataStore';

import styles from './List.scss';


const List = ({title, image, description, columns, addColumn}) => {
  const columnsComponent = columns.map(columnData => (
    <Column key={columnData.id} {...columnData}/>
  ));

  return (
    <section className={styles.component}>
      <Hero
        titleText={title}
        image={image}
      />
      <div className={styles.description}>
        {ReactHtmlParser(description)}
      </div>
      <div className={styles.columns}>
        {columnsComponent}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn}/>
      </div>
    </section>
  );
};

List.propTypes = {
  description: PropTypes.node,
  columns: PropTypes.array,
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
  title: 'default',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export default List;
