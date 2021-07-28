import styled from 'styled-components/native'

export const Wrapper = styled.View`
   width: 100%;
   margin-top: 10px;
   flex-direction: row;
   justify-content: center;
`

export const Dots = styled.TouchableOpacity`
   width: 20px;
   height: 20px;
`

export const DotsContainer = styled.View`
   width: 11px;
   height: 11px;
   border-radius: 6px;
   background-color: #FFFFFF;

   opacity: ${props => props.active ? '1' : '0.3'};
`