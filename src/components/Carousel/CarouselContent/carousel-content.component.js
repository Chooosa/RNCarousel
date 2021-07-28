import React from 'react'
import { ScrollView } from 'react-native'
import { useWindowDimensions } from 'react-native'

import {
   Wrapper,
   Heading,
   TextWrapper,
   ContentText
} from './carousel-content.styles'

const CarouselContent = ({ index }) => {
   const phoneWidth = useWindowDimensions().width

   return (
      <Wrapper phoneWidth={phoneWidth}>
         {
            index === 0 ?
               <ScrollView
                  showsVerticalScrollIndicator={false}
               >
                  <TextWrapper>
                     <Heading>
                        You have
                     </Heading>
                     <ContentText>
                        millions of questions...
                     </ContentText>
                  </TextWrapper>

                  <TextWrapper>
                     <Heading>
                        We have
                     </Heading>
                     <ContentText>
                        answer in the stars!
                     </ContentText>
                  </TextWrapper>
               </ScrollView>
               : index === 1 ?
                  <ScrollView
                     showsVerticalScrollIndicator={false}
                  >
                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 40) + 'px'}
                        marginBottom={'40px'}
                     >
                        <Heading
                           size={34}
                           lineHeight={40}
                        >
                           Love
                        </Heading>
                        <ContentText
                           size={34}
                           lineHeight={40}
                        >

                           When will I meet my soulmate?
                           When will I get married?
                           and others...
                        </ContentText>
                     </TextWrapper>

                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 40) + 'px'}
                        marginBottom={'40px'}
                     >
                        <Heading
                           size={34}
                           lineHeight={40}
                        >
                           Self
                        </Heading>
                        <ContentText
                           size={34}
                           lineHeight={40}
                        >
                           What I am here to learn in life?
                           Am I on the right path?
                           and others...
                        </ContentText>
                     </TextWrapper>

                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 40) + 'px'}
                        marginBottom={'40px'}
                     >
                        <Heading
                           size={34}
                           lineHeight={40}
                        >
                           Daily life
                        </Heading>
                        <ContentText
                           size={34}
                           lineHeight={40}
                        >
                           What is going to happen next?
                           Any insight for today?
                           and others...
                        </ContentText>
                     </TextWrapper>
                  </ScrollView>
                  :
                  <ScrollView
                     showsVerticalScrollIndicator={false}
                  >
                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 38) + 'px'}
                     >
                        <Heading>
                           How it works
                        </Heading>
                     </TextWrapper>

                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 38) + 'px'}
                     >
                        <ContentText>
                           Share birth details
                        </ContentText>
                     </TextWrapper>

                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 38) + 'px'}
                     >
                        <ContentText>
                           Ask a question
                        </ContentText>
                     </TextWrapper>

                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 38) + 'px'}
                     >
                        <ContentText>
                           An astrologer will make a prediction
                        </ContentText>
                     </TextWrapper>

                     <TextWrapper
                        maxWidth={Math.round(phoneWidth - 38) + 'px'}
                     >
                        <ContentText>
                           Get your answer
                        </ContentText>
                     </TextWrapper>
                  </ScrollView>
         }
      </Wrapper>
   )
}

export default CarouselContent