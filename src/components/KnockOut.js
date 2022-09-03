import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { knockOutContext } from '../App';
import Flag from 'react-flagkit';
import Phase from './Phase';

const KnockContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Knock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'of1 qf1 sf1 fi sf2 qf2 of2';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  color: #dff0d8;
  @media only screen and (max-width: 912px) {
    grid-template-rows: 1fr 10fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const PhaseselectorContainer = styled.div`
  position: relative;
  grid-area: selector;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PhaseSelector = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  background-color: #262b24;
  border: ${(props) =>
    props.selected ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.3)'};
  border-radius: 0.4rem;
  padding: 10px;
  filter: brightness(${(props) => (props.selected ? 2 : 1)});
`;

const Champs = styled.div`
  position: absolute;
  top: 10%;
  @media only screen and (max-width: 921px) {
    top: 0;
  }
`;

const KnockOut = ({ windowSize }) => {
  const phasesNames = ['Ro. 16', 'Quarter Finals', 'Semi Finals', 'Finals'];
  const phaseGrid = ['of1 of2', 'qf1 qf2', 'sf1 sf2', 'fi fi'];
  const phaseArea = ['of', 'qf', 'sf', 'fi'];
  const matchNums = [[0, 4], [8, 10], [12, 13], [14]];
  const { knockWinners, runnerUps, setRunnerUps, groups } =
    useContext(knockOutContext);

  const [selectedPhase, setSelectedPhase] = useState(0);

  const games = [
    [
      [
        [groups[0].table[0], groups[1].table[1]],
        [groups[2].table[0], groups[3].table[1]],
        [groups[4].table[0], groups[5].table[1]],
        [groups[6].table[0], groups[7].table[1]],
      ],
      [
        [groups[1].table[0], groups[0].table[1]],
        [groups[3].table[0], groups[2].table[1]],
        [groups[5].table[0], groups[4].table[1]],
        [groups[7].table[0], groups[6].table[1]],
      ],
    ],
    [
      [
        [knockWinners[0], knockWinners[1]],
        [knockWinners[2], knockWinners[3]],
      ],
      [
        [knockWinners[4], knockWinners[5]],
        [knockWinners[6], knockWinners[7]],
      ],
    ],
    [
      [[knockWinners[8], knockWinners[9]]],
      [[knockWinners[10], knockWinners[11]]],
    ],
    [
      [runnerUps[0], runnerUps[1]],
      [knockWinners[12], knockWinners[13]],
    ],
  ];

  useEffect(() => {
    let runner = [
      ['', ''],
      ['', ''],
    ];
    if (knockWinners[12][0] !== '') {
      if (knockWinners[12][0] === knockWinners[8][0]) {
        runner[0] = knockWinners[9];
      } else {
        runner[0] = knockWinners[8];
      }
    }
    if (knockWinners[13][0] !== '') {
      if (knockWinners[13][0] === knockWinners[10][0]) {
        runner[1] = knockWinners[11];
      } else {
        runner[1] = knockWinners[10];
      }
    }
    setRunnerUps((prev) =>
      prev.map((e, i) => (e[0] === runner[i][0] ? e : runner[i]))
    );
  }, [knockWinners, setRunnerUps]);

  return (
    <KnockContainer>
      {windowSize.w > 912 ? (
        <Knock>
          <Phase
            games={games[0][0]}
            area={'of1'}
            matchNum={0}
            name={phasesNames[0]}
          />
          <Phase
            games={games[1][0]}
            area={'qf1'}
            matchNum={8}
            name={phasesNames[1]}
          />
          <Phase
            games={games[2][0]}
            area={'sf1'}
            semi={0}
            matchNum={12}
            name={phasesNames[2]}
          />
          <Phase
            games={games[3]}
            area={'fi'}
            matchNum={14}
            name={phasesNames[3]}
            final={true}
          >
            {knockWinners[15] !== ['', ''] && (
              <Champs>
                <Flag country={knockWinners[15][1]} size={200} />
              </Champs>
            )}
          </Phase>
          <Phase
            games={games[2][1]}
            area={'sf2'}
            semi={1}
            matchNum={13}
            name={phasesNames[2]}
          />
          <Phase
            games={games[1][1]}
            area={'qf2'}
            matchNum={10}
            name={phasesNames[1]}
          />
          <Phase
            games={games[0][1]}
            area={'of2'}
            matchNum={4}
            name={phasesNames[0]}
          />
        </Knock>
      ) : (
        <Knock
          style={{
            gridTemplateAreas: `'selector selector' '${phaseGrid[selectedPhase]}'`,
          }}
        >
          <PhaseselectorContainer>
            {phasesNames.map((e, i) => (
              <PhaseSelector
                selected={i === selectedPhase}
                onClick={() => setSelectedPhase(i)}
              >
                {e}
              </PhaseSelector>
            ))}
          </PhaseselectorContainer>
          {selectedPhase < 3 && (
            <>
              <Phase
                games={games[selectedPhase][0]}
                area={`${phaseArea[selectedPhase]}1`}
                matchNum={matchNums[selectedPhase][0]}
                name={phasesNames[selectedPhase]}
              />
              <Phase
                games={games[selectedPhase][1]}
                area={`${phaseArea[selectedPhase]}2`}
                matchNum={matchNums[selectedPhase][1]}
                name={phasesNames[selectedPhase]}
              />
            </>
          )}
          {selectedPhase === 3 && (
            <Phase
              games={games[selectedPhase]}
              area={`${phaseArea[selectedPhase]}`}
              matchNum={matchNums[selectedPhase][0]}
              name={phasesNames[selectedPhase]}
              final={true}
            >
              {knockWinners[15] !== ['', ''] && (
                <Champs>
                  <Flag country={knockWinners[15][1]} size={200} />
                </Champs>
              )}
            </Phase>
          )}
        </Knock>
      )}
    </KnockContainer>
  );
};

export default KnockOut;
