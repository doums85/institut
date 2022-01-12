/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styled from 'styled-components';
import Cours from './Cours';
import Formule from './Formule';
import Session from './Session';

const Prestation = ({ titlePrestation, introduction, courses, pricings, sessions, annonce }) => {
  const [tab, setTab] = useState('one');

  const updateTabs = (e) => setTab(e.target.id);

  return (
    <Section id="courses" className="section container">
      <h2 className="section__title-center">{titlePrestation} </h2>
      <p>{introduction}</p>

      <TabsWrap>
        <h4
          id="one"
          className={tab == 'one' ? 'active-tab' : undefined}
          onClick={updateTabs}>
          Nos cours
        </h4>
        <h4
          id="two"
          className={tab == 'two' ? 'active-tab' : undefined}
          onClick={updateTabs}>
          Nos formules
        </h4>
        <h4
          id="three"
          className={tab == 'three' ? 'active-tab' : undefined}
          onClick={updateTabs}>
          Nos sessions
        </h4>
      </TabsWrap>

      {tab == 'one' && <Cours courses={courses} />}
      {tab == 'two' && <Formule pricings={pricings}  courses={courses}/>}
      {tab == 'three' && <Session sessions={sessions} annonce={annonce} />}
    </Section>
  );
};

const Section = styled.section`
  padding: 3rem 2rem 2rem;
  border-radius: 1rem;
  text-align: center;

  h2 {
    margin-bottom: var(--mb-1);
  }

  @media screen and (max-width: 320px) {
    padding: 2rem 1rem;
  }

  @media screen and (min-width: 992px) {
    padding: 3.5rem 2.5rem;
  }

  .active-tab {
    color: var(--first-color);
  }
`;

const TabsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--mb-2);
  margin-top: var(--mb-2-5);

  h4 {
    background: var(--container-color);
    color: var(--title-color-b);
    padding: 0.8rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export default Prestation;
