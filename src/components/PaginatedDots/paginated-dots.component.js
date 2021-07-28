import React from 'react'

import { Wrapper, Dots, DotsContainer } from './paginated-dots.styles'

const PaginatedDots = ({ handleChangeSlide, sliderState }) => {

   return (
      <Wrapper>
         {
            [0, 1, 2].map((item, index) => {
               return (
                  <Dots
                     key={index}
                     onPress={() => handleChangeSlide(item)}
                     activeOpacity={0}
                  >
                     <DotsContainer
                        active={item === sliderState.currentPage}
                     />
                  </Dots>
               )
            })
         }
      </Wrapper>
   )
}

export default PaginatedDots