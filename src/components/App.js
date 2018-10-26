import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// const { Header, Footer, Content } = Layout;

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

class App extends React.Component {
  render() {
    return (
      <AppContainer className="App">
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </AppContainer>
    );
  }
}

export default App;
