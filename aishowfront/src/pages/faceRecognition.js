import { Upload, Icon, message ,Input,Button,Row, Col} from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import { APIS } from '../conf/APIS'
import { Typography, Divider } from 'antd';
import { Recognition } from '../components/Recognition';
const { Title, Paragraph, Text } = Typography;
const { Search  } = Input;


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default class Face extends React.Component {
  state = {
    loading: false,
  };
   /** 获取子组件状态 */
 getChildState = (state) => {
  const result = (
    <div>
      识别结果
      <table>
        <tbody>
      {state.result.prediction.map((item,index)=>{
        return <tr key={index} >
          <td>{item.classes}</td>
          <td>{item.probs}</td>
        </tr>
      })
      }
      </tbody>
      </table>
    </div>
  );
  this.setState({result:result});
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
              <Col span={6}>{this.state.result}</Col>
            </Row>
          </div>
      
    );
  }
}




