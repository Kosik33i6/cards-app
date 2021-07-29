import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import image from '../../images/image-1.svg';
import {faq} from '../../data/dataStore';
import styles from './Faq.scss';

const Faq = () => {
  return (
    <Container>
      <div className={styles.component}>
        <Hero title={faq.titleForHero} image={image} />
        <h2>{faq.title}</h2>
        <p>{faq.paragraph}</p>
      </div>
    </Container>
  );
};

export default Faq;
