import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Content, FormWrap, InputsWrap, Submit } from '../styled';


export const settings = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};


const Form = () => {
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
        'template_institut',
        form.current,
        'user_e1bJmuoifu1YB8pQnizLc'
      )
      .then(
        (result) => {
          toast.success('Votre message a été envoyé ! ', settings);
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
    <FormWrap ref={form} onSubmit={sendEmail}>
      <InputsWrap>
        <Content>
          <input
            onChange={handleChange}
            className="contact__input"
            placeholder=" "
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="email">Email</label>
        </Content>

        <Content>
          <input
            onChange={handleChange}
            className="contact__input"
            placeholder=" "
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="name">Nom et Prénom</label>
        </Content>

        <Content className="textarea">
          <textarea
            onChange={handleChange}
            className="contact__input"
            placeholder=" "
            name="message"
            id="message"
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
      <ToastContainer />
    </FormWrap>
  );
};

// Second Part

export default Form;
