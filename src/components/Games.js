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

const Games = ({ goals, setGoals, group, setGroups, idx, setPoints }) => {
  useEffect(() => {
    let table = [];
    for (let i = 0; i < group.teams.length; i++) {
      table.push([group.teams[i], group.codes[i], 0]);
    }

    for (let g = 0; g < goals.length; g++) {
      if (goals[g][0][1] !== '' && goals[g][1][1] !== '') {
        //draw.
        if (goals[g][0][1] === goals[g][1][1]) {
          table[goals[g][0][0]][2]++;
          table[goals[g][1][0]][2]++;
          //first teams wins.
        } else if (goals[g][0][1] > goals[g][1][1]) {
          table[goals[g][0][0]][2] += 3;
          //second team wins.
        } else if (goals[g][1][1] > goals[g][0][1]) {
          table[goals[g][1][0]][2] += 3;
        }
      }
    }

    setGroups((prev) =>
      prev.map(
        (e, i) =>
          i !== idx ? e : { ...group, table: table.sort((a, b) => b[2] - a[2]) } //TODO: write sort algorithm from scratch to match world cup tiebreak rules.
      )
    );

    // setPoints((prev) =>
    //   prev.map((e, i) => (i !== idx ? e : new Array(4).fill(0)))
    // );
    // for (let g = 0; g < goals.length; g++) {
    //   //draw.
    //   if (goals[g][0] !== '' && goals[g][1] !== '') {
    //     if (goals[g][0] === goals[g][1]) {
    //       setPoints((prev) =>
    //         prev.map((e, i) =>
    //           i !== idx
    //             ? e
    //             : e.map((e, i) =>
    //                 i === pairings[g][0] || i === pairings[g][1]
    //                   ? (parseInt(e) + 1).toString()
    //                   : e
    //               )
    //         )
    //       );
    //     } else if (parseInt(goals[g][0]) > parseInt(goals[g][1])) {
    //       setPoints((prev) =>
    //         prev.map((e, i) =>
    //           i !== idx
    //             ? e
    //             : e.map((e, i) =>
    //                 i === pairings[g][0] ? (parseInt(e) + 3).toString() : e
    //               )
    //         )
    //       );
    //     } else if (parseInt(goals[g][1]) > parseInt(goals[g][0])) {
    //       setPoints((prev) =>
    //         prev.map((e, i) =>
    //           i !== idx
    //             ? e
    //             : e.map((e, i) =>
    //                 i === pairings[g][1] ? (parseInt(e) + 3).toString() : e
    //               )
    //         )
    //       );
    //     }
    //   }
    // }
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
                    i !== idx1
                      ? e
                      : e.map((e, i) =>
                          i === 0 ? e : del ? '' : event.target.value.toString()
                        )
                  )
            )
      )
    );
  };

  return (
    <GameContainer>
      {goals.map((e, i) => {
        return (
          <Line key={i}>
            <Name area={`team1`}>{group.teams[e[0][0]]}</Name>
            <Goals area={`goals1`}>
              <GoalsText
                onChange={(e) => handleGoals(e, i, 0, false)}
                onFocus={(e) => handleGoals(e, i, 0, true)}
                type="text"
                value={e[0][1]}
              ></GoalsText>
            </Goals>
            <Vs>vs</Vs>
            <Goals area={`goals2`}>
              <GoalsText
                onChange={(e) => handleGoals(e, i, 1, false)}
                onFocus={(e) => handleGoals(e, i, 1, true)}
                type="text"
                value={e[1][1]}
              ></GoalsText>
            </Goals>
            <Name area={`team2`}>{group.teams[e[1][0]]}</Name>
          </Line>
        );
      })}
    </GameContainer>
  );
};

export default Games;
