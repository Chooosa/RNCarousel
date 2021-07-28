import styled from 'styled-components/native'

export const ScreenWraper = styled.View`
   flex: 1;
   padding-bottom: 30px;
`

export const ScreenContainer = styled.View`
   flex: 1;
`

export const HeaderWrapper = styled.View`
   width: 100%;
   padding: 25px 20px;
   flex-direction: row;
   align-items: center;
`

export const HeaderText = styled.Text`
   font-weight: bold;
   font-size: 30px;
   line-height: 35px;
   color: #FFFFFF;
`

export const HeaderLogo = styled.Image`
   margin-right: 10px;
`

export const Button = styled.TouchableOpacity`
   width: ${props => props.phoneWidth - 40}px;
   height: 44px;

   margin: 22px 20px 0 20px;

   background: #FFFFFF;
   border-radius: 28px;

   justify-content: center;
   align-items: center;
`

export const ButtonText = styled.Text`
   font-weight: normal;
   font-size: 22px;
   line-height: 26px;

   color: #056FDD;
`