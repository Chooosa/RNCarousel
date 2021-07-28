import React, { useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import {
   ScreenWraper,
   HeaderWrapper,
   HeaderText,
   HeaderLogo,
   ScreenContainer,
   Button,
   ButtonText
} from './start.styles'
import Carousel from '../../components/Carousel/carousel.component';
import PaginatedDots from '../../components/PaginatedDots/paginated-dots.component'
import { useWindowDimensions } from 'react-native';

const StartScreen = () => {
   const carouselRef = useRef()
   const [sliderState, setSliderState] = useState({ currentPage: 0 });
   const phoneWidth = useWindowDimensions().width
   const phoneHeight = useWindowDimensions().height

   console.log(phoneHeight)


   const handleChangeSlide = (item) => {
      const { currentPage } = sliderState;
      let indexOfNextScreen = item !== null ? item : currentPage !== 2 ? currentPage + 1 : 0
      carouselRef.current.scrollToIndex({ index: indexOfNextScreen, animated: true })
   }

   return (
      <LinearGradient start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 0 }}
         colors={['#6B73FF', '#000DFF']}
         style={{ flex: 1 }}
      >
         <ScreenWraper>
            <HeaderWrapper>
               <HeaderLogo source={require('../../assets/logo.png')} />
               <HeaderText>
                  Calm
               </HeaderText>
            </HeaderWrapper>
            <ScreenContainer>
               <Carousel
                  carouselRef={carouselRef}
                  sliderState={sliderState}
                  setSliderState={setSliderState}
               />
            </ScreenContainer>
            <PaginatedDots
               handleChangeSlide={handleChangeSlide}
               sliderState={sliderState}
            />
            <Button
               onPress={() => handleChangeSlide(null)}
               phoneWidth={phoneWidth}
            >
               <ButtonText>
                  {
                     sliderState.currentPage === 0 ? 'Cool!' : sliderState.currentPage === 1 ? 'Awesome!' : 'Try now!'
                  }
               </ButtonText>
            </Button>
         </ScreenWraper>
      </LinearGradient>
   )
}

export default StartScreen