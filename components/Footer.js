/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { settings } from './Contact/Form';
import { ModelText } from './styled';
import { urlFor } from '../sanity';

const Footer = ({ infoContact, mention, cgv, confidential, paiement }) => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState('');

  const onCloseModal = () => setOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();
    document.querySelector('#email').value
      ? toast.success('Souscription réussi !', settings)
      : toast.warn('Merci saissir votre email', settings);
  };

  return (
    <footer className="section">
      <Container className="container grid">
        <Content>
          <h3>
            Abonnez - vous à notre newsletter <br /> rester à jour
          </h3>
          <Newsletter
            method="post"
            action="https://seckmamadou.us20.list-manage.com/subscribe/post?u=45d17c557520a2d108b0585dc&amp;id=c1c3e54eba">
            <input type="email" name="EMAIL" id="email" required />
            <button
              onClick={onSubmit}
              type="submi"
              className="button button--flex footer__button">
              S 'inscrire
              <i className="ri-arrow-right-up-line button__icon"> </i>
            </button>
          </Newsletter>
        </Content>
        <Content>
          <h3> Contact </h3>
          <ContactUs>
            {infoContact.map((info, index) => (
              <li key={info._key}>
                <a
                  href={
                    index == 0
                      ? `https://wa.me/${info.valueInfo.trim()}`
                      : `mailto:${info.valueInfo.trim()}`
                  }
                  target="_blank">
                  {info.valueInfo}
                </a>
              </li>
            ))}
            <li>
              <a href="https://www.facebook.com/">
                <i className="ri-facebook-fill"> </i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="ri-instagram-line"> </i>
              </a>
              <a href="https://twitter.com/">
                <i className="ri-telegram-line"> </i>
              </a>
            </li>
          </ContactUs>
        </Content>

        <Content>
          <h3>Informations relatives</h3>
          <Informations className="grid">
            <li
              onClick={() => {
                setDetail(mention);
                setOpen(true);
              }}>
              <a href="#">Mentions légales</a>
            </li>
            <li
              onClick={() => {
                setDetail(cgv);
                setOpen(true);
              }}>
              <a href="#">CGV</a>
            </li>
            <li
              onClick={() => {
                setDetail(confidential);
                setOpen(true);
              }}>
              <a href="#">Politique de confidentialité</a>
            </li>
          </Informations>
        </Content>

        <Content>
          <h3>Nos moyens de paiements</h3>
          <img src={urlFor(paiement)} alt="paiement avec paypal" />
        </Content>
      </Container>

      <Copyright>
        &#169;Institut Dar An Najah. Tous droits réservés - par{' '}
        <a href="https://www.fkwebagency.com/" target="_blank">
          FK Web Agency
        </a>{' '}
      </Copyright>

      <Modal
        open={open}
        onClose={onCloseModal}
        closeIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        }
        center>
        <ModelText className="grid">
          <p style={{ marginTop: '2rem' }}>{detail}</p>
        </ModelText>
      </Modal>
    </footer>
  );
};

const Container = styled.div`
  row-gap: 3rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1.2fr repeat(3, 0.5fr);
  }
`;

const Content = styled.div`
  h3 {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-1-5);
  }
  img {
    width: 200px;
  }
`;

const Newsletter = styled.form`
  background-color: var(--first-color-lighten);
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  @media screen and (max-width: 789px) {
    width: 70%;
  }
  @media screen and (max-width: 470px) {
    width: 90%;
  }
  input {
    width: 40%;
    padding: 0 0.5rem;
    background: none;
    color: var(--text-color-b);
    border: none;
    outline: none;
    @media screen and (min-width: 471px and max-width: 789px) {
      width: 60%;
    }
  }
`;

const ContactUs = styled.ul`
  display: grid;
  row-gap: 0.75rem;

li:last-child{
    display: inline-flex;
  column-gap: .75rem;
  a{
    font-size: 1rem;
  color: var(--text-color);
  transition: .3s;

  &:hover{
  transform: translateY(-.25rem);
    }
  }

}

  a{
    font-size: var(--small-font-size);
    color: var(--text-color)
    font-weight: var(--font-medium);
  }
`;

const Informations = styled.ul`
  gap: var(--mb-0-5);

  a{
    font-size: var(--small-font-size);
    color: var(--text-color)
    font-weight: var(--font-medium);
  }
`;

const Payement = styled.div``;

const Copyright = styled.p`
  text-align: center;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  margin: 5rem 0 1rem;
  a {
    font-size: calc(var(--smaller-font-size) + 0.1rem);
    color: var(--first-color-alt);
  }
`;
export default Footer;
