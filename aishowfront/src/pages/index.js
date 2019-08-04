import styles from './index.css';
import { Carousel } from 'antd';
import { Typography, Divider } from 'antd';
import React from "react";
const { Title, Paragraph, Text } = Typography;
export default class Face extends React.Component {
  render(){
    return (
      <div>
  <Carousel autoplay>
        <div>
        <h3>人脸检测</h3>
          <img src={require('../image/banner/banner.jpg')} style={{height:'400px'}}/>
        </div>
        <div>
          <h3>色情识别</h3>
          <img src={require('../image/banner/banner-sex.jpg')} style={{height:'400px'}}/>
        </div>
        <div>
          <h3>场景识别</h3>
          <img src={require('../image/banner/banner-scene.jpg')} style={{height:'400px'}}/>
        </div>
        <div>
          <h3>图像超分辨率</h3>
          <img src={require('../image/banner/banner-SR.jpg')} style={{height:'400px'}}/>
        </div>
    </Carousel>
  
{/*   
  <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development
        </Text>
        .
      </Paragraph>
      <Title level={2}>Guidelines and Resources</Title>
      <Paragraph>
        We supply a series of design principles, practical patterns and high quality design resources
        (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
        prototypes beautifully and efficiently.
      </Paragraph>
  
    
      <Divider />
  
    </Typography> */}
      </div>
      
    );
  }

}
