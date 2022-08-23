import { useEffect } from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  display: grid;
  grid-template-areas:
    'line0'
    'line1'
    'line2'
    'line3'
    'line4'
    'line5';
`;

const Line = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: grid;
  grid-template-areas: 'team1 goals1 vs goals2 team2';
  grid-template-columns: 4fr 1fr 1fr 1fr 4fr;
`;

const Name = styled.span`
  position: relative;
  grid-area: ${(props) => props.area};
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

const Goals = styled.span`
  position: relative;
  grid-area: ${(props) => props.area};
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Vs = styled.span`
  position: relative;
  grid-area: vs;
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

const pairings = [
  [0, 1],
  [2, 3],
  [0, 2],
  [3, 1],
  [3, 0],
  [1, 2],
];

const Games = ({ goals, setGoals, group, idx, setPoints }) => {
  useEffect(() => {
    setPoints((prev) =>
      prev.map((e, i) => (i !== idx ? e : new Array(4).fill(0)))
    );
    for (let g = 0; g < goals.length; g++) {
      //draw.
      if (goals[g][0] !== '' && goals[g][1] !== '') {
        if (goals[g][0] === goals[g][1]) {
          setPoints((prev) =>
            prev.map((e, i) =>
              i !== idx
                ? e
                : e.map((e, i) =>
                    i === pairings[g][0] || i === pairings[g][1]
                      ? (parseInt(e) + 1).toString()
                      : e
                  )
            )
          );
        } else if (parseInt(goals[g][0]) > parseInt(goals[g][1])) {
          setPoints((prev) =>
            prev.map((e, i) =>
              i !== idx
                ? e
                : e.map((e, i) =>
                    i === pairings[g][0] ? (parseInt(e) + 3).toString() : e
                  )
            )
          );
        } else if (parseInt(goals[g][1]) > parseInt(goals[g][0])) {
          setPoints((prev) =>
            prev.map((e, i) =>
              i !== idx
                ? e
                : e.map((e, i) =>
                    i === pairings[g][1] ? (parseInt(e) + 3).toString() : e
                  )
            )
          );
        }
      }
    }
  }, [goals, idx, setPoints]);

  const handleGoals = (event, idx0, idx1, del) => {
    const regEx = new RegExp('^[0-9]+$');
    if (!regEx.test(event.target.value) && event.target.value !== '') {
      return;
    }
    setGoals((prev) =>
      prev.map((e, i) =>
        i !== idx
          ? e
          : e.map((e, i) =>
              i !== idx0
                ? e
                : e.map((e, i) =>
                    i !== idx1 ? e : del ? '' : event.target.value.toString()
                  )
            )
      )
    );
  };

  return (
    <GameContainer>
      {pairings.map((e, i) => {
        return (
          <Line key={i}>
            <Name area={`team1`}>{group.teams[e[0]]}</Name>
            <Goals area={`goals1`}>
              <GoalsText
                onChange={(e) => handleGoals(e, i, 0, false)}
                onFocus={(e) => handleGoals(e, i, 0, true)}
                type="text"
                value={goals[i][0]}
              ></GoalsText>
            </Goals>
            <Vs>vs</Vs>
            <Goals area={`goals2`}>
              <GoalsText
                onChange={(e) => handleGoals(e, i, 1, false)}
                onFocus={(e) => handleGoals(e, i, 1, true)}
                type="text"
                value={goals[i][1]}
              ></GoalsText>
            </Goals>
            <Name area={`team2`}>{group.teams[e[1]]}</Name>
          </Line>
        );
      })}
    </GameContainer>
  );
};

export default Games;
