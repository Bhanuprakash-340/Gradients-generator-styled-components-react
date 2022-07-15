import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 48%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1%;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`

export const DirectionButton = styled.button`
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  border: none;
  background-color: #ffffff;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 100%;
  }
`
