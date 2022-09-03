import { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import Games from './Games';

const GroupStageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'a b c d'
    'e f g h';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media only screen and (max-width: 912px) {
    display: inline;
  }
`;

const GroupPanel = styled.div`
  position: relative;
  color: #dff0d8;
  grid-area: ${(props) => props.gridArea};
  display: grid;
  grid-template-areas:
    'title title'
    'tabl games';
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 10fr;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  @media only screen and (max-width: 912px) {
    width: 100%;
    height: 100%;
    grid-template-areas:
      'title selector'
      'tabl games';
  }
`;

const Title = styled.span`
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  grid-area: title;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  @media only screen and (max-width: 912px) {
    margin-right: 0;
  }
`;

const TableContainer = styled.div`
  position: relative;
  grid-area: tabl;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;

const GamesContainer = styled.div`
  position: relative;
  grid-area: games;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupSelectorContainer = styled.div`
  position: relative;
  grid-area: selector;
  margin-right: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: grid;
  padding-left: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'g0 g1 g2 g3'
    'g4 g5 g6 g7';
`;

const GroupSelector = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262b24;
  border: ${(props) =>
    props.selected ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.3)'};
  border-radius: 0.4rem;
  margin: 5px;
  filter: brightness(${(props) => (props.selected ? 2 : 1)});
`;

const GroupStage = ({
  groups,
  setGroups,
  goals,
  setGoals,
  setGoalsFilled,
  windowSize,
}) => {
  const [selectedGroup, setSelectedGroup] = useState(0);
  return (
    <GroupStageContainer>
      {windowSize.w > 912 ? (
        groups.map((e, i) => {
          return (
            <GroupPanel key={i} gridArea={e.name.toLowerCase()}>
              <Title>Group {e.name}</Title>
              <TableContainer>
                <Table group={e} />
              </TableContainer>
              <GamesContainer>
                <Games
                  goals={goals[i]}
                  setGoals={setGoals}
                  group={e}
                  setGroups={setGroups}
                  idx={i}
                  setGoalsFilled={setGoalsFilled}
                />
              </GamesContainer>
            </GroupPanel>
          );
        })
      ) : (
        <GroupPanel>
          <Title>Group {groups[selectedGroup].name}</Title>
          <GroupSelectorContainer>
            {groups.map((e, i) => {
              return (
                <GroupSelector
                  key={i}
                  selected={i === selectedGroup}
                  style={{ gridArea: `g${i}` }}
                  onClick={() => setSelectedGroup(i)}
                >
                  <span>{e.name}</span>
                </GroupSelector>
              );
            })}
          </GroupSelectorContainer>
          <TableContainer>
            <Table group={groups[selectedGroup]} />
          </TableContainer>
          <GamesContainer>
            <Games
              goals={goals[selectedGroup]}
              setGoals={setGoals}
              group={groups[selectedGroup]}
              setGroups={setGroups}
              idx={selectedGroup}
              setGoalsFilled={setGoalsFilled}
            />
          </GamesContainer>
        </GroupPanel>
      )}
    </GroupStageContainer>
  );
};

export default GroupStage;
