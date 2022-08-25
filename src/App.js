import { useState } from 'react';
import GroupStage from './components/GroupStage';
import styled from 'styled-components';
import KnockOut from './components/KnockOut';
import { groupsArr, goalsArr } from './groups';
import useLocalStorage from './useLocalStorage';

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #212521;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PhaseSelector = styled.div`
  position: relative;
  width: 95%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Phase = styled.div`
  position: relative;
  width: 20rem;
  height: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-top: 1px solid #dff0d8;
  border-left: 1px solid #dff0d8;
  border-right: 1px solid #dff0d8;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;

const PhaseFiller = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 40rem);
  box-sizing: border-box;
  border-bottom: 1px solid #dff0d8;
  color: #dff0d8;
  font-size: 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 1rem;
`;

const Tracker = styled.div`
  position: relative;
  width: 95%;
  height: 90%;
  background-color: #262b24;
  box-sizing: border-box;
  border-left: 1px solid #dff0d8;
  border-right: 1px solid #dff0d8;
  border-bottom: 1px solid #dff0d8;
`;

function App() {
  const [goals, setGoals] = useLocalStorage('saved-world-cup-goals', goalsArr);
  const [groups, setGroups] = useState(groupsArr);
  const [phase, setPhase] = useState(1); //1 = group stage, 2 = knockout.
  const [goalsFilled, setGoalsFilled] = useState(0);

  const handleClick = (num) => {
    setPhase(num);
  };

  return (
    <PageContainer>
      <PhaseSelector>
        <Phase
          style={{
            borderBottom: phase === 1 ? 0 : '1px solid #dff0d8',
            color: phase === 1 ? '#dff0d8' : '#535353',
            backgroundColor: phase === 1 ? '#262b24' : '#212521',
          }}
          onClick={() => handleClick(1)}
        >
          Group Stage
        </Phase>
        <Phase
          style={{
            borderBottom: phase === 1 ? '1px solid #dff0d8' : 0,
            color: phase === 1 ? '#535353' : '#dff0d8',
            backgroundColor: phase === 1 ? '#212521' : '#262b24',
          }}
          onClick={() => handleClick(2)}
        >
          Knock Out
        </Phase>
        <PhaseFiller>2022 World Cup Tracker</PhaseFiller>
      </PhaseSelector>
      <Tracker>
        {phase === 1 ? (
          <GroupStage
            groups={groups}
            setGroups={setGroups}
            goals={goals}
            setGoals={setGoals}
            setGoalsFilled={setGoalsFilled}
          />
        ) : (
          <KnockOut isUnlocked={goalsFilled >= 96} />
        )}
      </Tracker>
    </PageContainer>
  );
}

export default App;
