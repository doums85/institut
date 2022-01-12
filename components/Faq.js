import React, { useState } from 'react';
import styled from 'styled-components';

const Faq = ({ faqs }) => {
  const [open, setOpen] = useState(0);

  const show = (e) => {
    open == e.target.parentElement.dataset.num
      ? setOpen(0)
      : setOpen(e.target.parentElement.dataset.num);
  };

  return (
    <Section id="faq" className="section">
      <h2 className="section__title-center">
        Quelques questions courantes <br /> ont souvent été demandés
      </h2>
      <Container className="grid container">
        <FaqWrap className="grid">
          {faqs.map((faq, index) => (
            <Item
              onClick={show}
              data-num={index + 1}
              key={faq._key}
              className={open == index + 1 ? 'accordion-open' : undefined}>
              <Header data-num={index + 1}>
                <i onClick={show} className="ri-add-line questions__icon"></i>
                <h3 onClick={show}>{faq.question}</h3>
              </Header>

              <Answer
                className={
                  open == index + 1 ? 'questions__content' : undefined
                }>
                <p>{faq.answer}</p>
              </Answer>
            </Item>
          ))}
        </FaqWrap>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding-block: 3rem;
  background-color: var(--first-color-lighten);
  h2 {
    color: var(--title-color-b);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--mb-2);
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const FaqWrap = styled.div`
  display: grid;
  row-gap: 1.5rem;

  @media screen and (min-width: 992px) {
    row-gap: 2rem;
  }

  .accordion-open .questions__content {
    height: auto;
  }
  .accordion-open header,
  .accordion-open div {
    background-color: var(--first-color);
  }

  .accordion-open h3,
  .accordion-open p,
  .accordion-open .questions__icon {
    color: #fff;
  }

  .accordion-open .questions__icon {
    transform: rotate(45deg);
  }
`;

const Item = styled.div`
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(223, 223, 227, 1) 35%,
    rgba(200, 200, 200, 1) 100%
  );
  border-radius: 0.25rem;
  transition: 0.3s;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  transition: 0.3s;
  cursor: pointer;

  i {
    font-size: 1.25rem;
    color: var(--text-color);
    transition: 0.3s;
  }

  h3 {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    color: var(--text-color);
    transition: 0.3s;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem;
  }
`;

const Answer = styled.div`
  overflow: hidden;
  height: 0;
  transition: 0.3s;

  p {
    font-size: var(--smaller-font-size);
    padding: 0 1.25rem 1.25rem 2.5rem;
    color: #fff;
    @media screen and (min-width: 992px) {
      padding: 0 3.5rem 2.25rem 2.75rem;
    }
  }
`;

export default Faq;
