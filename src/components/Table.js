import { useState } from 'react';
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
  width: 100%;
  height: 25%;
  grid-area: ${(props) => props.area};
  display: grid;
  grid-template-areas: 'flag name points';
  grid-template-columns: 1fr 3fr 1fr;
  &:hover {
    cursor: default;
  }
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
  font-size: 1rem;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Points = styled.span`
  position: relative;
  grid-area: points;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoverDetails = styled.div`
  position: absolute;
  bottom: 0.5rem;
  background-color: #acb1a7;
  pointer-events: none;
  border: 1px solid black;
  border-radius: 0.5rem;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const HoverName = styled.div`
  position: relative;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  border-right: 1px solid black;
`;

const HoverFlag = styled.div`
  position: relative;
  padding-right: 1rem;
  transform: rotate(90deg);
`;

const HoverInfo = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  align-self: flex-start;
`;

const Table = ({ group }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(-1);
  const handleDetail = (idx) => {
    setIsDetailVisible(idx);
  };
  return (
    <Tab>
      {group.table.map((e, i) => {
        return (
          <Line
            key={i}
            area={`line${i}`}
            onMouseEnter={() => handleDetail(i)}
            onMouseLeave={() => setIsDetailVisible(-1)}
          >
            <FlagContainer>
              <Flag country={e[1]} size={30} />
            </FlagContainer>
            <Name>{e[0]}</Name>
            <Points>{e[2]}</Points>
            {isDetailVisible === i && (
              <HoverDetails>
                <HoverName>
                  <HoverFlag>
                    <Flag country={e[1]} size={30} />
                  </HoverFlag>
                  {e[0]}
                </HoverName>
                <HoverInfo>
                  <span>Pts: {e[2]}</span>
                  <span>GF: {e[3]}</span>
                  <span>GA: {e[4]}</span>
                  <span>GD: {e[5]}</span>
                </HoverInfo>
              </HoverDetails>
            )}
          </Line>
        );
      })}
    </Tab>
  );
};

export default Table;
