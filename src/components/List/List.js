import React from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
// import isUrl from 'is-url';

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
  title: settings.defaultListTitle,
  image: settings.defaultListImage,
};

export default List;
