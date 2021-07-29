import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
export {info} from '../../data/dataStore';
import image from '../../images/image-2.jpg';
import { info } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero image={image} title={info.titleForHero}/>
    <h2>{info.title}</h2>
    <p>{info.paragraph}</p>
  </Container>
);

export default Info;
