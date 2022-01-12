/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from '../Home';
import { Card, CardWrap, List, Number } from '../styled';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import emailjs from 'emailjs-com';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DOMPurify from 'dompurify';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Content,
  FormWrap,
  InputsWrap,
  Submit,
} from '../styled';
import { settings } from '../Contact/Form';

const Formules = ({ pricings, courses }) => {
  const [open, setOpen] = useState(false);

  const handlerModal = () => setOpen(!open);
  const [value, setValue] = useState();
  const form = useRef();
  // Handle XSS attack
  const handleChange = (e) => {
    document.getElementById(e.target.id).value = DOMPurify.sanitize(
      e.target.value
    );
  };

  // Recaptacha verification
  const onChange = (value) => setValue(value);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!value) {
      return toast.warn('Merci de confirmer que vous étes un humain', settings);
    }
    emailjs
      .sendForm(
        'gmail',
        'inscription',
        form.current,
        'user_e1bJmuoifu1YB8pQnizLc'
      )
      .then(
        (result) => {
          toast.success('Votre demande d\'inscription a été envoyé ! ', settings);
        },
        (error) => {
          toast.error(
            "Une erreure s'est produite réessayer plus tard ",
            settings
          );
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <CardWrap className="grid">
        {pricings.map((price, index) => (
          <Card key={price._key}>
            <div>
              <Number>{`0${index + 1}`} </Number>
              <h3>{price.title}</h3>
            </div>
            <List>
              {price.price.map((priceItem) => (
                <li key={priceItem._key}>
                  <i className="ri-checkbox-fill" />
                  {priceItem.chapterName} :{' '}
                  <strong>{priceItem.chapterPricing} </strong>
                </li>
              ))}
            </List>
          </Card>
        ))}
      </CardWrap>
      <Button onClick={handlerModal}>S'incrire maintenant</Button>

      <Modal
        open={open}
        onClose={handlerModal}
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
        <p style={{ marginTop: '1.5rem' }}>
          Merci de remplir le formulaire ci-dessous en choissisant le cours
          désiré
        </p>
        <FormWrap style={{ marginTop: '2rem' }} ref={form} onSubmit={sendEmail}>
          <InputsWrap>
            <Content>
              <input
                onChange={handleChange}
                className="contact__input"
                placeholder=" "
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="name">Nom & Prénom</label>
            </Content>

            <Content style={{ marginTop: '2rem' }}>
              <input
                onChange={handleChange}
                className="contact__input"
                placeholder=" "
                type="email"
                name="email"
                id="email"
                required
              />
              <label htmlFor="email">Email</label>
            </Content>
            <Content style={{ marginTop: '2rem' }}>
              <input
                onChange={handleChange}
                className="contact__input"
                placeholder=" "
                type="text"
                name="phone"
                id="phone"
                
              />
              <label htmlFor="phone">Numéro de téléphone (Optionnel)</label>
            </Content>

            <div className="grid" style={{ marginTop: '2rem' }}>
              <label htmlFor="cours">Choissisez un cours</label>
              <select style={{ marginBottom: '2rem' }} name="cours" id="cours" required>
                {courses.map((cours) => (
                  <option key={cours._key} value={cours.title}>
                    {cours.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid">
              <label htmlFor="formule">Choissisez une formule</label>
              <select style={{ marginBottom: '2rem' }} name="cours" id="formule" required>
                {pricings.map((price) => (
                  <option key={price._key} value={price.title}>
                    {price.title}
                  </option>
                ))}
              </select>
            </div>

            <Content style={{ marginTop: '2rem' }}>
              <textarea
                onChange={handleChange}
                className="contact__input"
                placeholder=" "
                name="message"
                id="message"
                required
              />
              <label htmlFor="message">Votre message</label>
            </Content>
          </InputsWrap>

          <Submit>
            <button type="submit" className='button button--flex"'>
              Envoyer
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
            <ReCAPTCHA
              sitekey="6LeRjHQbAAAAAK1RrvjekO8yoZXTa04WdzBOYL8B"
              onChange={onChange}
            />
          </Submit>
        </FormWrap>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  margin-top: var(--mb-2);
  a {
    margin-top: var(--mb-2);
    cursor: pointer;
  }
`;

export default Formules;
