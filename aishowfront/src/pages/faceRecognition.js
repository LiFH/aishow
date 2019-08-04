import { Upload, Icon, message ,Input,Button,Row, Col} from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import { APIS } from '../conf/APIS'
import { Typography, Divider } from 'antd';
import { Recognition } from '../components/Recognition';


const { Title, Paragraph, Text } = Typography;
const { Search  } = Input;

export default class Face extends React.Component {
  state = {
    result : null,
    img :null,
  };
 /** 获取子组件状态 */
 getChildState = (state) => {
  console.log(state);
  var str = `data:image/jpeg;base64,${state.img}`
  this.setState({img:str});
 
}
  
  render() {
 
    const { imageUrl } = this.state;
    return (

            <div>
            <Typography>
            <Title>人脸检测</Title>
        <Paragraph>
        快速检测人脸并返回人脸框位置、定位五官与轮廓关键点
        准确识别多种人脸属性
        </Paragraph>
            <Divider />
            </Typography>
            <Row>
              <Col span={12}>  
                <Recognition onChange={this.getChildState} url = {APIS.faceRecognition}/>
              </Col>
              <Col span={4}></Col>
              <img src={this.state.img} style={{width:'500px'}} />
            </Row>
          </div>
      
    );
  }
}




