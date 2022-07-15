import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  ContentContainer,
  Heading,
  Paragraph,
  ButtonsList,
  ColorPickerContainer,
  CustomInputAndColor,
  ColorCode,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},  #8ae323, #014f7b`,
  }

  onClickGradientButton = item => {
    this.setState({activeGradientDirection: item})
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection},${fromColorInput},${toColorInput}`,
    })
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      gradientValue,
      activeGradientDirection,
    } = this.state
    return (
      <AppContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <ButtonsList>
            {gradientDirectionsList.map(eachButton => (
              <GradientDirectionItem
                key={eachButton.directionId}
                buttonDetails={eachButton}
                onClickGradientButton={this.onClickGradientButton}
                isActive={activeGradientDirection === eachButton.value}
              />
            ))}
          </ButtonsList>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorPickerContainer>
            <CustomInputAndColor>
              <ColorCode>{fromColorInput}</ColorCode>
              <CustomInput
                type="color"
                onChange={this.onChangeFromColorInput}
                value={fromColorInput}
              />
            </CustomInputAndColor>
            <CustomInputAndColor>
              <ColorCode>{toColorInput}</ColorCode>
              <CustomInput
                type="color"
                onChange={this.onChangeToColorInput}
                value={toColorInput}
              />
            </CustomInputAndColor>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onGenerate}>
            Generate
          </GenerateButton>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
