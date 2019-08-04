import { Layout, Menu, Breadcrumb, Icon} from 'antd';

import { Typography ,Button} from 'antd';
import React from "react";
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;

export  class MenuLayout extends React.Component {

  render(){
    return (
        <Menu
        mode="inline"
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        // theme="dark"
      >
        {/* <Button  onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
      <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
    </Button> */}
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>图像识别</span>
            </span>
          }
        >
          <Menu.Item key="1"><Link to="/faceRecognition"></Link>人脸识别</Menu.Item>
          <Menu.Item key="2"><Link to="/sexRecognition"></Link>色情识别</Menu.Item>
          <Menu.Item key="3"><Link to="/sceneRecognition"></Link>场景识别</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              <span>图像增强</span>
            </span>
          }
        >
          <Menu.Item key="4"><Link to="/superResolution"></Link>图像超分辨率</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
  
}


