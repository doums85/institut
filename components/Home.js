/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../sanity';

const Home = ({ imageSlide, titleSlide, textSlide }) => {

  return (
    <Section id="home">
      <p
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}
        className="container"
        id="container">
        بسم الله الرحمن الرحيم
      </p>
      <Container className="container grid">
        <ImageWrap>
          <img src={urlFor(imageSlide)} alt={`Image de institut dar an naja`} />
        </ImageWrap>

        <TextWrap>
          <h1>{titleSlide} </h1>
          <p>{textSlide} </p>
          <Button href="#about">
            Découvrir<i className="ri-arrow-right-down-line"></i>
          </Button>
        </TextWrap>

        <SocialWrap>
          <span>Suivez-nous</span>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer">
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="ri-telegram-line"></i>
            </a>
          </div>
        </SocialWrap>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 3.5rem 0 2rem;
  margin-top: 6rem;
  @media screen and (min-width: 992px) {
    padding: 13rem 0 5rem;
  }

  @media screen and (min-width: 767px) {
    padding: 10rem 0 5rem;
  }
`;

const Container = styled.div`
  position: relative;
  row-gap: 2rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const ImageWrap = styled.div`
  width: 280px;
  margin: auto;
  @media screen and (min-width: 767px) {
    width: 400px;
    order: 1;
  }
`;

const TextWrap = styled.div`
  h1 {
    font-size: var(--big-font-size);
    line-height: 140%;
    margin-bottom: var(--mb-1);

    @media screen and (max-width: 320px) {
      font-size: var(--h1-font-size);
    }
  }

  p {
    margin-bottom: var(--mb-2-5);

    @media screen and (min-width: 992px) {
      padding-right: 7rem;
    }
  }
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  background-color: var(--first-color);
  color: #fff;
  padding: 1rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  transition: 0.3s;
  &:hover {
    background-color: var(--first-color-alt);
  }
  &:hover i {
    transform: translateX(0.25rem);
  }
`;

const SocialWrap = styled.div`
  position: absolute;
  top: 2rem;
  right: -1rem;
  display: grid;
  justify-items: center;
  row-gap: 3.5rem;

  span {
    font-weight: var(--font-medium);
    font-size: var(--smaller-font-size);
    color: var(--first-color);
    position: relative;
    transform: rotate(90deg);
    &::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 2px;
      background-color: var(--first-color);
      right: -45%;
      top: 50%;
    }
  }

  div {
    display: inline-flex;
    flex-direction: column;
    row-gap: 0.25rem;
    margin-top: 1.2rem;

    a {
      font-size: 1rem;
      color: var(--first-color);
      transition: 0.3s;
      &:hover {
        transform: translateX(0.25rem);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    right: -3rem;
    row-gap: 4.5rem;
    span {
      font-size: var(--small-font-size);
      &::after {
        width: 1.5rem;
        right: -60%;
      }
    }

    div {
      a {
        font-size: 1.15rem;
      }
    }
  }

  @media screen and (min-width: 767px) {
    top: 30%;
  }
`;

export default Home;
