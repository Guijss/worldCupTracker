import styled from 'styled-components';
import Table from './Table';
import Games from './Games';
import { groups } from '../groups';

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

const GroupStage = ({ goals, setGoals, points, setPoints }) => {
  return (
    <GroupStageContainer>
      {groups.map((e, i) => {
        return (
          <GroupPanel key={i} gridArea={e}>
            <Title>Group {e.name}</Title>
            <TableContainer>
              <Table group={e} points={points[i]} />
            </TableContainer>
            <GamesContainer>
              <Games
                goals={goals[i]}
                setGoals={setGoals}
                group={e}
                idx={i}
                setPoints={setPoints}
              />
            </GamesContainer>
          </GroupPanel>
        );
      })}
    </GroupStageContainer>
  );
};

export default GroupStage;
