/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import { urlFor } from '../sanity';

const Header = ({ logo, window, annonce }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('');
  const showMenu = () => setToggle(!toggle);

  if (window) {
    const changeHeight = () => {
      setHeight(window.pageYOffset);
    };
    window.addEventListener('scroll', changeHeight);
  }

  return (
    <Container>
      {annonce.active && !active &&(
        <Annonce>
          <p>{annonce.annonce} </p>
          <i onClick={() => setActive(true)} className="ri-close-line"></i>
        </Annonce>
      )}
      {height <= 150 && (
        <Logo>
          <img
            src={urlFor(logo)}
            alt="logo institut"
            width={180}
            height={150}
          />
        </Logo>
      )}
      <Nav className="container">
        <Menu className={toggle ? 'show' : undefined}>
          <NavList>
            <li>
              <Link
                to="home"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={100}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={100}>
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="courses"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={100}>
                Cours
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={100}>
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={100}>
                Contact{' '}
              </Link>
            </li>
          </NavList>
        </Menu>
        <ToggleIcon id="toggle" onClick={showMenu}>
          <i className={toggle ? 'ri-close-line' : 'ri-menu-line'}></i>
        </ToggleIcon>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--body-color);
  z-index: var(--z-fixed);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Annonce = styled.div`
  position: relative;
  width: 100vw;
  text-align: center;
  padding-block: var(--mb-0-5);
  background-color: var(--first-color);

  i {
    position: absolute;
    top: 0.7rem;
    right: var(--mb-1);
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .show {
    right: 0;
    transition: 0.5s;
  }

  @media screen and (min-width: 767px) {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 3rem;
  }
`;

const Logo = styled.a`
  transition: 0.3s;

  img {
    transform: scale(1.5);
    top: 10px !important;
  }
`;

const Menu = styled.div`
  margin-left: auto;
  @media screen and (max-width: 767px) {
    position: fixed;
    background-color: var(--container-color);
    width: 80%;
    height: 100%;
    top: 0;
    right: -100%;
    box-shadow: -2px 0 4px hsla(var(--hue), 24%, 15%, 0.1);
    padding: 4rem 0 0 3rem;
    border-radius: 1rem 0 0 1rem;
    transition: 0.3s;
    z-index: var(--z-fixed);
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    column-gap: 3rem;
  }

  a {
    color: var(--text-color);
    font-weight: var(--font-medium);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: var(--first-color);
    }
  }
`;

const ToggleIcon = styled.div`
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  cursor: pointer;
  z-index: 100;
  color: var(--title-color);
`;

export default Header;
