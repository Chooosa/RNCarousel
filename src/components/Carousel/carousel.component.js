import React from 'react'
import { FlatList, useWindowDimensions } from 'react-native'
import CarouselContent from './CarouselContent/carousel-content.component'

const Carousel = ({ carouselRef, sliderState, setSliderState }) => {
   const phoneWidth = useWindowDimensions().width

   const setSliderPage = (event) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.round(x / phoneWidth);

      if (indexOfNextScreen !== currentPage) {
         setSliderState({
            ...sliderState,
            currentPage: indexOfNextScreen,
         });
      }
   };

   return (
      <FlatList
         onScroll={(event) => {
            setSliderPage(event);
         }}
         pagingEnabled={true}
         ref={carouselRef}
         data={[{ index: 0 }, { index: 1 }, { index: 2 }]}
         scrollEnabled
         horizontal
         showsHorizontalScrollIndicator={false}
         style={{ width: '100%', flex: 1 }}
         keyExtractor={(item) => item.index.toString()}
         renderItem={({ item }) => {
            return (
               <CarouselContent index={item.index} />
            )
         }}
      />
   )
}

export default Carousel