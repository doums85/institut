/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import SecondPart from './Form'
const Contact = ({infoContact}) => {
  return (
    <section id="contact" className="section container">
      <Container className="grid">
        <FirstPart>
          <h2>
            Contactez-nous <br /> aujourd'hui
          </h2>
          <DataWrap>
            {infoContact.map((info, index) => (
            <Information key={info._key}>
            <h3>{info.itemInfo}</h3>
            <span>
              <i className={index == 0 ? "ri-phone-line" : "ri-mail-line" }></i>
              <a href={ index == 0 ? `https://wa.me/+212627184320` : `mailto:${info.valueInfo}`} target="_blank">
                {info.valueInfo}
              </a>
            </span>
          </Information>
            ))}
          </DataWrap>
        </FirstPart>

        <SecondPart/>
      </Container>
    </section>
  );
};

const Container = styled.div`
  row-gap: 3.5rem;
  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  h2 {
    margin-bottom: var(--mb-2);
    color: var(--title-color);
  }
`;
// First Part
const FirstPart = styled.div``;

const DataWrap = styled.div`
  display: grid;
  row-gap: 2rem;
`;

const Information = styled.div`
  h3 {
    color: var(--text-color);
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-5);
  }

  span {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--title-color);
    font-weight: var(--font-medium);
    a {
      color: var(--title-color);
    }
  }
`;



export default Contact;
