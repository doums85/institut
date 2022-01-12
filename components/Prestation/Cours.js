/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Card, CardWrap, List, Number, ModelText } from '../styled';

const Cours = ({ courses }) => {
  const [open, setOpen] = useState(false);
  const [detailChapter, setDetailChapter] = useState([]);

  const onCloseModal = () => setOpen(false);

  return (
    <Container>
      <CardWrap className="grid">
        {courses.map((cours, index) => (
          <Card key={cours._key}>
            <div>
              <Number>{`0${index + 1}`} </Number>

              <h3>{cours.title} </h3>
            </div>
            <List>
              {cours.chapters.map((item) => (
                <li
                  key={item._key}
                  onClick={() => {
                    const detail = cours.chapters.filter(
                      (el) => el._key === item._key
                    );
                    setDetailChapter(detail);
                    setOpen(true);
                  }}>
                  <i className="ri-checkbox-fill" />
                  {item.name}
                </li>
              ))}
            </List>
          </Card>
         ))}
      </CardWrap>
      {detailChapter.length > 0 &&
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
          <h2>{detailChapter[0].name} </h2>
          <p>{detailChapter[0].description}</p>
        </ModelText>
      </Modal>
        }
    </Container>
  );
};

const Container = styled.div`
  margin-top: var(--mb-1);

  li {
    cursor: pointer;
  }
`;

export default Cours;
