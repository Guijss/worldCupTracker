import styled from 'styled-components';
import Flag from 'react-flagkit';

const Tab = styled.div`
  position: relative;
  height: 30%;
  width: 100%;
  display: grid;
  grid-template-areas:
    'line0'
    'line1'
    'line2'
    'line3';
`;

const Line = styled.div`
  position: relative;
  grid-area: ${(props) => props.area};
  display: grid;
  grid-template-areas: 'flag name points';
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

const Points = styled.span`
  position: relative;
  grid-area: points;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = ({ group, points }) => {
  // let organizer = [];
  // for (let i = 0; i < points.length; i++) {
  //   organizer.push([group.codes[i], group.teams[i], points[i]]);
  // }
  // organizer.sort((a, b) => b[2] - a[2]);
  return (
    <Tab>
      {group.table.map((e, i) => {
        return (
          <Line key={i} area={`line${i}`}>
            <FlagContainer>
              <Flag country={e[1]} size={30} />
            </FlagContainer>
            <Name>{e[0]}</Name>
            <Points>{e[2]}</Points>
          </Line>
        );
      })}
    </Tab>
  );
};

export default Table;
