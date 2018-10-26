import React from 'react'
import styled from 'styled-components';
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'

const FooterContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: lightgrey;
  padding: 10px;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        Footer
      </FooterContainer>
    )
  }
}

export default Footer
