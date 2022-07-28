import styled from 'styled-components/native'

export const ListItemContainer = styled.View`
  height: 60px;
  background-color: #06d;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`
export const ButtonsView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 180px;
`
interface BackgroundProps {
  backgroundColor: string
}

export const Button = styled.TouchableOpacity<BackgroundProps>`
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
`
