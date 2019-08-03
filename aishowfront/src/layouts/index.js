import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';
import { Route } from 'react-router';
import { Typography } from 'antd';

import {Link} from 'react-router-dom';

import index from '../pages/index'
import faceRecognition from '../pages/faceRecognition'
import sexRecognition from '../pages/sexRecognition'
import superResolution from '../pages/superResolution'
import sceneRecognition from '../pages/sceneRecognition'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const { Title } = Typography;
function BasicLayout(props) {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/index"></Link>AIshow</Menu.Item>
      </Menu>
      {/* <Title>AI展示</Title> */}
    </Header>
    <Layout>
      <Sider  width={200} style={{ background: '#fff' }}>
        <Menu
        // theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                图像识别
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
                图像增强
              </span>
            }
          >
            <Menu.Item key="5"><Link to="/superResolution"></Link>图像超分辨率</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: '600px',
          }}
        >
          <Route path="/index" component={index}></Route>
          <Route path="/faceRecognition" component={faceRecognition}></Route>
          <Route path="/sexRecognition" component={sexRecognition}></Route>
          <Route path="/sceneRecognition" component={sceneRecognition}></Route>
          <Route path="/superResolution" component={superResolution}></Route>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

export default BasicLayout;
