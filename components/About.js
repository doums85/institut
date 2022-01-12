/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../sanity';

const About = ({ imageAbout, titleAbout, textAbout, advance }) => {

  return (
    <section id="about" className="section container">
      <Container className="grid">
        <ImageWrap>
          <img src={urlFor(imageAbout)} alt="Qui sommes nous?" />
        </ImageWrap>

        <TextWrap>
          <h2>{titleAbout}</h2>
          <p id="description">{textAbout}</p>

          <DetailWrap>
            {advance.map((item) => (
              <p key={item._key}>
                <i className="ri-checkbox-fill" />
                {item}
              </p>
            ))}
          </DetailWrap>

          <a href="#courses">
            S'incrire <i className="ri-arrow-right-down-line"></i>
          </a>
        </TextWrap>
      </Container>
    </section>
  );
};

const Container = styled.div`
  gap: 2rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    column-gap: 7rem;
  }
`;

const ImageWrap = styled.div`
  width: 280px;
  justify-self: center;

  @media screen and (min-width: 767px) {
    width: 380px;
  }
`;

const TextWrap = styled.div`
  display: grid;
  h2 {
    width: 250px;
    margin-bottom: var(--mb-1);
  }
  #description {
    margin-bottom: 1.8rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--first-color);
    font-weight: var(--font-medium);
    transform: translateX(0.25rem);
    &:hover i {
      transform: translateX(0.25rem);
    }
  }
`;

const DetailWrap = styled.div`
  display: grid;
  row-gap: 1rem;
  margin-bottom: var(--mb-2-5);

  p {
    display: inline-flex;
    column-gap: 0.5rem;
    font-size: var(--small-font-size);

    i {
      font-size: 1rem;
      color: var(--first-color);
      margin-top: 0.15rem;
    }
  }
`;

export default About;
