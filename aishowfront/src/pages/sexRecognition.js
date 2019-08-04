import { Upload, Icon, message ,Input,Button,Row, Col} from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import { APIS } from '../conf/APIS'
import { Typography, Divider } from 'antd';
import { Recognition } from '../components/Recognition';
const { Title, Paragraph, Text } = Typography;
const { Search  } = Input;

export default class Sex extends React.Component {
  state = {
    result : null,
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
    return (
      <div>
        <Typography>
        <Title>色情识别</Title>
        <Paragraph>
        人工智能鉴黄技术，智能识别图片和视频中的色情和性感内容，
        让您的应用轻松过审，远离违规风险
        </Paragraph>
        <Divider />
        </Typography>
        <Row>
          <Col span={12}>  
            <Recognition onChange={this.getChildState} url = {APIS.sexRecognition}/>
          </Col>
          <Col span={4}></Col>
          <Col span={6}>{this.state.result}</Col>
        </Row>
      </div>

      
    );
  }
}




