import React from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router'
// import { Link } from 'react-router-dom'

import { Menu, Icon, Modal } from 'antd';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  background-color: white;
  box-shadow: 0 2px 1px #f0f1f2;
`

const MenuContainer = styled.div`
  display: flex;
  margin-right: 10px;
`

const LogoPlaceholder = styled.div`
  width: 64px;
  height: 100%;
  padding: 10px;
  background-color: lightgrey;
`

class Header extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({ visible: true });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({ visible: false });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({ visible: false });
  }

  render() {
    return (
      <HeaderContainer>
        <LogoPlaceholder>Logo</LogoPlaceholder>
        <MenuContainer>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '48px', background: 'white' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Peers</Menu.Item>
          </Menu>
          <Icon type="user" theme="outlined" onClick={this.showModal} style={{ fontSize: '32px', margin: 'auto 0px auto 10px' }}/>
        </MenuContainer>
        <Modal
          title="Login Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>User:</p>
          <p>Password:</p>
          <p>Does not do anything yet</p>
        </Modal>
      </HeaderContainer>
    )
  }
}

export default withRouter(Header)
