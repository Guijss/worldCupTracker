import styled from 'styled-components';
import Match from './Match';

const KnockContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'of1 qf1 sf1 fi sf2 qf2 of2';
  background-color: ${(props) => (props.isUnlocked ? 'red' : 'transparent')};
`;

const Of = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Qf = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Sf = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Fi = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.span`
  position: absolute;
  top: 2rem;
  color: #dff0d8;
  font-size: 0.9rem;
  opacity: 0.5;
`;

const KnockOut = ({ isUnlocked }) => {
  return (
    <KnockContainer isUnlocked={isUnlocked}>
      <Of area={'of1'}>
        <Label>Ro. 16</Label>
        <Match />
        <Match />
        <Match />
        <Match />
      </Of>
      <Qf area={'qf1'}>
        <Label>Quarter Finals</Label>
        <Match />
        <Match />
      </Qf>
      <Sf area={'sf1'}>
        <Label>Semi Finals</Label>
        <Match />
      </Sf>
      <Fi area={'fi'}>
        <Match final={true} />
        <Match thirdPlace={true} />
      </Fi>
      <Sf area={'sf2'}>
        <Label>Semi Finals</Label>
        <Match />
      </Sf>
      <Qf area={'qf2'}>
        <Label>Quarter Finals</Label>
        <Match />
        <Match />
      </Qf>
      <Of area={'of2'}>
        <Label>Ro. 16</Label>
        <Match />
        <Match />
        <Match />
        <Match />
      </Of>
    </KnockContainer>
  );
};

export default KnockOut;
