import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { knockOutContext } from '../App';
import Flag from 'react-flagkit';

const MatchContainer = styled.div`
  position: ${(props) => (props.thirdPlace ? 'absolute' : 'relative')};
  height: 4rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(${(props) => (props.thirdPlace ? '15rem' : 0)});
  @media only screen and (max-width: 912px) {
    width: ${(props) => (props.final || props.thirdPlace ? '60%' : '80%')};
  }
`;

const Line = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  display: grid;
  grid-template-areas: 'flag name goal';
  grid-template-columns: 1fr 3.5fr 1fr;
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
  @media only screen and (max-width: 912px) {
    font-size: 0.7rem;
  }
`;

const Goal = styled.span`
  position: relative;
  grid-area: goal;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoalsText = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 1rem;
  color: inherit;
  font-family: inherit;
`;

const Label = styled.span`
  position: absolute;
  top: -2.5rem;
  color: #dff0d8;
  font-size: 1.5rem;
  /* @media only screen and (max-width: 912px) {
    display: none;
  } */
`;

const Match = ({
  final = false,
  thirdPlace = false,
  semi = -1,
  t1,
  t2,
  match,
}) => {
  const {
    setKnockWinners,
    isUnlocked,
    knockGoals,
    setKnockGoals,
    setRunnerUps,
  } = useContext(knockOutContext);

  useEffect(() => {
    const setUpWinner = () => {
      let winner = ['', ''];
      if (
        knockGoals[match][0] !== knockGoals[match][1] &&
        knockGoals[match][0] !== '' &&
        knockGoals[match][1] !== ''
      ) {
        if (parseInt(knockGoals[match][0]) > parseInt(knockGoals[match][1])) {
          winner = [t1[0], t1[1]];
        } else {
          winner = [t2[0], t2[1]];
        }
      }
      return winner;
    };

    setKnockWinners((prev) =>
      prev.map((e, i) => (i !== match ? e : setUpWinner()))
    );
  }, [match, setKnockWinners, t1, t2, knockGoals, semi, setRunnerUps]);

  const handleGoals = (event, idx, del) => {
    const regEx = new RegExp('^[0-9]+$');
    if (!regEx.test(event.target.value) && event.target.value !== '') {
      return;
    }
    if (t1[0] === '' || t2[0] === '') {
      return;
    }

    const adjustedMatch = () => {
      if (match < 8) {
        return 8;
      }
      if (match < 12) {
        return 12;
      }
      if (match < 14) {
        return 14;
      }
      return 16;
    };

    setKnockGoals((prev) =>
      prev.map((e, i) =>
        i !== match
          ? !del
            ? e
            : i >= adjustedMatch()
            ? ['', '']
            : e
          : e.map((e, i) =>
              i !== idx ? e : del ? '' : event.target.value.toString()
            )
      )
    );
    if (!final && del) {
      setRunnerUps([
        ['', ''],
        ['', ''],
      ]);
    }
  };

  return (
    <>
      {isUnlocked && t1[0] !== '' && t2[0] !== '' ? (
        <MatchContainer final={final} thirdPlace={thirdPlace}>
          {final && <Label>Final</Label>}
          {thirdPlace && <Label>Runner Up</Label>}
          <Line>
            <FlagContainer>
              <Flag country={t1[1]} size={30} />
            </FlagContainer>
            <Name>{t1[0]}</Name>
            <Goal>
              <GoalsText
                onChange={(e) => handleGoals(e, 0, false)}
                onFocus={(e) => handleGoals(e, 0, true)}
                type="text"
                value={knockGoals[match][0]}
              />
            </Goal>
          </Line>
          <Line>
            <FlagContainer>
              <Flag country={t2[1]} size={30} />
            </FlagContainer>
            <Name>{t2[0]}</Name>
            <Goal>
              <GoalsText
                onChange={(e) => handleGoals(e, 1, false)}
                onFocus={(e) => handleGoals(e, 1, true)}
                type="text"
                value={knockGoals[match][1]}
              />
            </Goal>
          </Line>
        </MatchContainer>
      ) : (
        <MatchContainer final={final} thirdPlace={thirdPlace}>
          {final && <Label>Final</Label>}
          {thirdPlace && <Label>Runner Up</Label>}
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
      )}
    </>
  );
};

export default Match;
