import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 5px;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 652px;
  }
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
`
export const CustomInputAndColor = styled.div``

export const ColorCode = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
`

export const CustomInput = styled.input`
  height: 40px;
  width: 75px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 100px;
  }
`

export const GenerateButton = styled.button`
  margin-top: 20px;
  height: 30px;
  width: 90px;
  font-size: 13px;
  font-weight: 600;
  background-color: #00c9b7;
  border: none;
  border-radius: 6px;
  color: #1e293b;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 100px;
    margin-top: 50px;
    font-size: 15px;
  }
`
