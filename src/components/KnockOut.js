import styled from 'styled-components';
import Match from './Match';

const KnockContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'of1 qf1 sf1 fi sf2 qf2 of2';
`;

const Of = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Qf = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Sf = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Fi = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const KnockOut = () => {
  return (
    <KnockContainer>
      <Of area={'of1'}>
        <Match />
        <Match />
        <Match />
        <Match />
      </Of>
      <Qf area={'qf1'} />
      <Sf area={'sf1'} />
      <Fi area={'fi'} />
      <Sf area={'sf2'} />
      <Qf area={'qf2'} />
      <Of area={'of2'} />
    </KnockContainer>
  );
};

export default KnockOut;
