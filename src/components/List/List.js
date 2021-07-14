import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';

import {settings} from '../../data/dataStore';

import styles from './List.scss';

class List extends Component {

    state = {
        columns: this.props.columns || [],
    }

    static propTypes = {
        description: PropTypes.node,
        columns: PropTypes.array,
        title: PropTypes.node.isRequired,
        image: PropTypes.string,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }

    addColumn(title) {

        this.setState(state => (
            {
                columns: [
                    ...state.columns,
                    {
                        key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: []
                    }
                ]
            }
        ));
    }

    render() {

        const {title, image} = this.props;

        const columns = this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps}/>
        ));

        return (
            <section className={styles.component}>
                <Hero
                    titleText={title}
                    image={image}
                />
                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>
                <div className={styles.columns}>
                    {columns}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
                </div>
            </section>
         );
    }
}

export default List;