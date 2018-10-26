import React from 'react'
import styled from 'styled-components';
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'

import Intro from './Intro'
import SliderCarousel from './SliderCarousel'

const ContentContainer = styled.div`
  width: 100%;
  background-color: white;
  max-width: 1024px;
  margin: 0px auto;
  padding: 10px;
`

const SliderCardPlaceholder = styled.div`
  background-color: lightblue;
  content: '';
  margin: 10px 10px;
  min-height: 200px;
`

const SliderSection = styled.div`
  margin-top: 20px;
`


class CustomSlide extends React.PureComponent {
  render() {
    const { index, ...props } = this.props;
    return (
      <SliderCardPlaceholder {...props}>
        <h3>{index}</h3>
      </SliderCardPlaceholder>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <ContentContainer>
        <Intro />
        <SliderSection>
          <SliderCarousel title='Category1'>
            <CustomSlide index={1} />
            <CustomSlide index={2} />
            <CustomSlide index={3} />
            <CustomSlide index={4} />
            <CustomSlide index={5} />
            <CustomSlide index={6} />
            <CustomSlide index={7} />
            <CustomSlide index={8} />
            <CustomSlide index={9} />
          </SliderCarousel>
          <SliderCarousel title='Category2'>
            <CustomSlide index={1} />
            <CustomSlide index={2} />
            <CustomSlide index={3} />
            <CustomSlide index={4} />
            <CustomSlide index={5} />
            <CustomSlide index={6} />
          </SliderCarousel>
        </SliderSection>
      </ContentContainer>
    )
  }
}

export default Content
