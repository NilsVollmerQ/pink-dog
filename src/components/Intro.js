import React from 'react'
import styled from 'styled-components';

const IntroContainer = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: lightgrey;
  padding: 10px;
`

const Headline = styled.div`
  font-size: 36px;
  font-weight: bold;
`

const Explanation = styled.div`
  font-size: 18px;
`

class Intro extends React.Component {
  render() {
    return (
      <IntroContainer>
        <Headline>Intro</Headline>
        <Explanation>Das Konzept kurz erklärt...</Explanation>
      </IntroContainer>
    )
  }
}

export default Intro
