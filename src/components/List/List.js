import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Hero from '../Hero/Hero';
import Column from '../Column/Column';

import styles from './List.scss';

class List extends Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        url: PropTypes.string,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
    render() {

        const {title, url} = this.props;

        return (
            <section className={styles.component}>
                <Hero
                    titleText={title}
                    url={url}
                />
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column title='Animal'/>
                    <Column title='Plants'/>
                    <Column title='Minerals'/>
                </div>
            </section>
         );
    }
}

export default List;