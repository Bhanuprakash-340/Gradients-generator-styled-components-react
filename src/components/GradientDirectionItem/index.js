import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {buttonDetails, onClickGradientButton, isActive} = props
  const {value, displayText} = buttonDetails

  const onClickButton = () => {
    onClickGradientButton(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickButton}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
