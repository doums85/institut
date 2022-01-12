import styled from 'styled-components';

export const CardWrap = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: var(--mb-1-5);
`;

export const Card = styled.div`
background-color: var(--container-color);
padding: 2.5rem 3rem 2rem 1.5rem;
border-radius: 1rem;
text-align: left;

@media screen and (max-width: 320px) {
    padding: 1.5rem;
  }

div {
    display: flex;
    align-items: center;
    gap: var(--mb-2);
  }

  h3 {
    color: var(--title-color-b);
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
  }
`;

export const Number = styled.div`
  display: inline-block;
  background-color: var(--first-color-alt);
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-1);
  transition: 0.3s;
`;


export const List = styled.ul`
  display: grid;

  li {
    display: inline-flex;
    column-gap: 0.5rem;
    color: var(--text-color-b);
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
    cursor: pointer;

    i {
      font-size: 1rem;
      color: var(--first-color);
      margin-top: 0.15rem;
    }
  }

  .prerequis{
    color: white;

    i{
      color: crimson;
    }
  }
`;

/*  Form */

export const FormWrap = styled.form`
  input {
    display: grid;
    row-gap: 2rem;
    margin-bottom: var(--mb-2-5);
  }
`;

export const InputsWrap = styled.div`
  display: grid;
  row-gap: 2rem;
  margin-bottom: var(--mb-2-5);

  .textarea {
    height: 7rem;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 3rem;
  border-bottom: 1px solid var(--text-color-light);

  .contact__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 1rem 0;
    background: none;
    color: var(--text-color);
    border: none;
    outline: none;
    z-index: 1;
  }

  label {
    position: absolute;
    top: 0.75rem;
    width: 100%;
    font-size: var(--small-font-size);
    color: var(--text-color-light);
    transition: 0.3s;
  }

  textarea {
    resize: none;
  }

  // Input focus move up label
  .contact__input:focus + label {
    top: -0.75rem;
    left: 0;
    font-size: var(--smaller-font-size);
    z-index: 10;
  }

  /*Input focus sticky top label*/
  .contact__input:not(:placeholder-shown).contact__input:not(:focus) + label {
    top: -0.75rem;
    font-size: var(--smaller-font-size);
    z-index: 10;
  }
`;

export const Submit = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--mb-2);
`;


export const ModelText = styled.div`
  gap: var(--mb-1);
  h2 {
    color: var(--title-color-b);
  }

  p, li {
    color: var(--text-color-b);
  }
`;
