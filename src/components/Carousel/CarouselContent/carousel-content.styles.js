import styled from 'styled-components/native'

export const Wrapper = styled.View`
   flex: 1;
   width: ${props => props.phoneWidth}px;
   padding: 50px 20px 0 20px;
   /* margin: 0 20px; */
`

export const TextWrapper = styled.View`
   max-width: ${props => props.maxWidth ? props.maxWidth : '80%'};
   margin-bottom: ${props => props.marginBottom ? props.marginBottom : '60px'};
`

export const Heading = styled.Text`
   font-weight: bold;
   font-size: ${props => props.size ? props.size : '44'}px;
   line-height: ${props => props.lineHeight ? props.lineHeight : '52'}px;

   color: rgba(255, 255, 255, 0.4);
`

export const ContentText = styled.Text`
   font-weight: bold;
   font-size: ${props => props.size ? props.size : '44'}px;
   line-height: ${props => props.lineHeight ? props.lineHeight : '52'}px;
   color: #FFFFFF;
`