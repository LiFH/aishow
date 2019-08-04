import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';
import { Route } from 'react-router';
import { Typography ,Button} from 'antd';
import React from "react";
import {Link} from 'react-router-dom';
import { MenuLayout } from './menu'
import index from '../pages/index'
import faceRecognition from '../pages/faceRecognition'
import sexRecognition from '../pages/sexRecognition'
import superResolution from '../pages/superResolution'
import sceneRecognition from '../pages/sceneRecognition'
const { SubMenu } = Menu;
const { Header, Content, Sider ,Footer } = Layout;


const { Title } = Typography;
export  class FunLayout extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render(){
    return (
        <Layout>
        <Sider  width={200} style={{ background: '#fff' }}  collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <MenuLayout/>
         
        </Sider>
        <Layout style={{ padding: '0 24px 0px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              background: '#fff',
              padding: 16,
              margin: 0,
              minHeight: '600px',
            }}
          >
            {/* <Route exact path="/" component={index}></Route> */}
            <Route path="/faceRecognition" component={faceRecognition}></Route>
            <Route path="/sexRecognition" component={sexRecognition}></Route>
            <Route path="/sceneRecognition" component={sceneRecognition}></Route>
            <Route path="/superResolution" component={superResolution}></Route>
          </Content>
        </Layout>
      </Layout>
    );
  }
  
}


