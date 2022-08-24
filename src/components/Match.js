import styled from 'styled-components';

const MatchContainer = styled.div`
  position: relative;
  height: 4rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  display: grid;
  grid-template-areas: 'flag name goal';
  grid-template-columns: 1fr 3fr 1fr;
`;

const FlagContainer = styled.span`
  position: relative;
  grid-area: flag;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Name = styled.span`
  position: relative;
  grid-area: name;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Goal = styled.span`
  position: relative;
  grid-area: goal;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Match = () => {
  return (
    <MatchContainer>
      <Line>
        <FlagContainer />
        <Name />
        <Goal />
      </Line>
      <Line>
        <FlagContainer />
        <Name />
        <Goal />
      </Line>
    </MatchContainer>
  );
};

export default Match;
