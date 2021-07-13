import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';


const Hero = ({titleText, url}) => {
    return (
        <header className={styles.component}>
            <h2 className={styles.title}>{titleText}</h2>
            <img className={styles.image} src={url} alt="hero" />
        </header>
     );
}

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    url: PropTypes.string,
}

export default Hero;