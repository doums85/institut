/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Card, CardWrap, List, Number, ModelText } from '../styled';

const Session = ({ sessions, annonce }) => {
  const [open, setOpen] = useState(false);
  const [detailCondition, setDetailCondition] = useState([]);

  const onCloseModal = () => setOpen(false);

  return (
    <Container>
      {annonce.active == false && (
        <p style={{ marginBottom: '1rem' }}>
          Nos sessions ne sont pas disponible en ce moment merci de nous
          contacter si vous voulez être informer des prochaines sessions
        </p>
      )}
      <CardStyle className="grid">
        {sessions.map((session, index) => (
          <Card key={session._key}>
            <div>
              <Number>{`0${index + 1}`} </Number>
              <h3>{session.title} </h3>
            </div>
            <List>
              {session.contenu.map((el) => (
                <li key={el._key}>
                  <i className="ri-checkbox-fill" />
                  {el.item} : <strong>{el.value}</strong>
                </li>
              ))}

              {session.condition && (
                <li
                  onClick={() => {
                    const detail = session.condition.filter(
                      (el) => el._key === session.condition._key
                    );
                    setDetailCondition(detail);
                    setOpen(true);
                  }}
                  className="prerequis">
                  <i className="ri-information-fill" />
                  <b>Voir les Conditions</b>
                </li>
              )}
            </List>
          </Card>
        ))}
      </CardStyle>

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
          <h2 style={{ marginTop: '1rem' }}>Conditions demandées</h2>
          <List>
            {detailCondition.map((condition) => (
              <li key={condition._key}>
                <i className="ri-checkbox-fill" />
                {condition}
              </li>
            ))}
          </List>
        </ModelText>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  margin-top: var(--mb-1);
`;

const CardStyle = styled(CardWrap)`
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
`;
export default Session;
