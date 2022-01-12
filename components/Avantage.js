/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../sanity';

const Avantage = ({ImageAvantage}) => {

  return (
    <section className="section container">
      <Container>
        <h2 className="section__title-center">
          Suivez nos cours sur tous vos appareils
        </h2>
        <div>
          <img src={urlFor(ImageAvantage)} alt="Institut Najah responsive" />
        </div>{' '}
      </Container>{' '}
    </section>
  );
};

const Container = styled.div`
  background-color: var(--first-color);
  padding: 3rem 2rem 2rem;
  border-radius: 1rem;
  h2 {
    color: var(--title-color-b);
  }

  @media screen and (max-width: 320px) {
    padding: 2rem 1rem;
  }

  @media screen and (min-width: 992px) {
    padding: 3.5rem 2.5rem;
  }
`;

export default Avantage;
