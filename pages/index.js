import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';
import HomeSection from '../components/Home';
import AboutSection from '../components/About';
import AvantageSection from '../components/Avantage';
import PrestationSection from '../components/Prestation/Prestation';
import FaqSection from '../components/Faq';
import ReviewSection from '../components/Review';
import ContactSection from '../components/Contact/Contact';
import Footer from '../components/Footer';
import { sanityClient } from '../sanity';

export default function Home({
  logo,
  slug,
  imageSlide,
  titleSlide,
  textSlide,
  imageAbout,
  titleAbout,
  textAbout,
  advance,
  ImageAvantage,
  titlePrestation,
  introduction,
  courses,
  pricings,
  sessions,
  annonce,
  faqs,
  reviews,
  infoContact,
  mention,
  cgv,
  confidential,
  paiement
}) {
  const [_window, set_window] = useState(null);

  useEffect(() => {
    set_window(window);
  }, []);


  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>

      <Header logo={logo} window={_window} annonce={annonce} />

      <Main>
        <HomeSection
          imageSlide={imageSlide}
          slug={slug}
          titleSlide={titleSlide}
          textSlide={textSlide}
        />
        <AboutSection
          imageAbout={imageAbout}
          titleAbout={titleAbout}
          textAbout={textAbout}
          advance={advance}
        />
        <AvantageSection ImageAvantage={ImageAvantage} />
        <PrestationSection
          titlePrestation={titlePrestation}
          introduction={introduction}
          courses={courses}
          pricings={pricings}
          sessions={sessions}
          annonce={annonce}
        />
        <FaqSection faqs={faqs} />
        <ReviewSection reviews={reviews} />
        <ContactSection infoContact={infoContact} />
        <Footer
          infoContact={infoContact}
          mention={mention}
          cgv={cgv}
          confidential={confidential}
          paiement={paiement}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  overflow: hidden;
`;

export const getServerSideProps = async () => {
  const properties = await sanityClient.fetch('* ');
  const filterType = (type) => properties.filter((el) => el._type == type);

  if (!properties.length) {
    return {
      props: {
        properties: null,
      },
    };
  } else {
    const information = filterType('information');
    const home = filterType('home');
    const about = filterType('about');
    const prestation = filterType('prestation');
    const faqs = filterType('faqs');
    const reviews = filterType('reviews');
    /* reviews */
    return {
      props: {
        /* Information Type */
        title: information[0].title,
        logo: information[0].logo,
        cgv: information[0].cgv,
        confidential: information[0].confidential,
        mention: information[0].mention,
        infoContact: information[0].contact,
        ImageAvantage: information[0].avantage,
        paiement: information[0].paiement,
        /* Home */
        imageSlide: home[0].slide.image,
        titleSlide: home[0].slide.title,
        textSlide: home[0].slide.text,

        /* About */
        imageAbout: about[0].presentation.image,
        titleAbout: about[0].presentation.title,
        textAbout: about[0].presentation.text,
        advance: about[0].advance,

        /* Prestation */
        titlePrestation: prestation[0].title,
        introduction: prestation[0].introduction,
        /* Courses */
        courses: prestation[0].courses,
        /* Pricing */
        pricings: prestation[0].pricings,
        /* Session */
        sessions: prestation[0].sessions,
        annonce: prestation[0].sessionAvailable,

        /* Faq */
        faqs: faqs[0].faq,

        /* Reviews */
        reviews: reviews[0].review,
      },
    };
  }
};
