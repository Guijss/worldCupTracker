import React from 'react';
import styled from 'styled-components';
import Match from './Match';

const PhaseContainer = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Label = styled.span`
  position: absolute;
  top: 2rem;
  color: #dff0d8;
  font-size: 0.9rem;
  opacity: 0.5;
  @media (max-height: 912px) {
    visibility: hidden;
  }
`;

const Phase = ({
  games,
  area,
  semi = -1,
  matchNum,
  name,
  final = false,
  children,
}) => {
  return (
    <PhaseContainer area={area}>
      <Label>{name}</Label>
      {games.map((e, i) => (
        <React.Fragment key={i}>
          {final ? (
            <Match
              final={i === 1}
              thirdPlace={i === 0}
              semi={semi}
              t1={e[0]}
              t2={e[1]}
              match={matchNum + i}
            />
          ) : (
            <Match semi={semi} t1={e[0]} t2={e[1]} match={matchNum + i} />
          )}
        </React.Fragment>
      ))}
      {children}
    </PhaseContainer>
  );
};

export default Phase;
