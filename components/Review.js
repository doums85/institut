/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

const Review = ({ reviews }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 360, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Section className="section container">
      <h2>Ils parlent de nous</h2>

      <Carousel breakPoints={breakPoints}>
        {reviews.map((review) => (
          <ReviewWrap key={review._key} className="grid">
            <div>
              <h3>{review.name}</h3>
              <em>{review.date} </em>
            </div>
            <p>{review.commentaire}</p>
          </ReviewWrap>
        ))}
      </Carousel>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  overflow-x: hidden;
  text-align: center;
  h2 {
    margin-bottom: var(--mb-2);
  }

  h3 {
    color: var(--title-color-b);
  }

  // Slider Custom
  .rec-swipable {
    gap: 1rem;
  }

  .rec-item-wrapper {
    border-radius: 1rem;
  }
  /* 
  // Arrow slider
  button:hover:enabled,
  button:focus:enabled,
   {
    background: transparent;
    border: none;
    box-shadow: none;
    color: var(--title-color);
  }
  button:hover:enabled,
  button:focus:enabled {
    color: var(--first-color);
  }

  */
  // Arrow slider
  .rec-arrow,
  .rec-arrow:hover:enabled,
  .rec-arrow:focus:enabled {
    background: transparent;
    border: none;
    box-shadow: none;
    color: var(--title-color);
  }
  .rec-arrow:hover:enabled,
  .rec-arrow:focus:enabled {
    color: var(--first-color);
  }

  // Dots Slider
  .rec-dot {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(223, 223, 227, 1) 35%,
      rgba(200, 200, 200, 1) 100%
    );
    box-shadow: 0 0 1px 3px var(--title-color);
  }
`;

const ReviewWrap = styled.div`
  gap: var(--mb-1);
  background-color: var(--container-color);
  padding: 2.5rem 3rem 2rem 1.5rem;
  border-radius: 1rem !important;
  text-align: left;
  color: var(--text-color-b);
`;

export default Review;
