import { Upload, Icon, message ,Input,Button,Row, Col} from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import { APIS } from '../conf/APIS'
import { Typography, Divider } from 'antd';
import { Recognition } from '../components/Recognition';
const { Title, Paragraph, Text } = Typography;
const { Search  } = Input;

export default class Avatar extends React.Component {
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
      <Title>场景识别</Title>
      <Paragraph>
       精准识别自然环境下数百种场景，让智能相册管理、照片检索和分类、
       基于场景内容的广告推荐等功能更加直观。
      </Paragraph>
      <Divider />
      </Typography>
      <Row>
      <Col span={12}>  
      <Recognition onChange={this.getChildState} url = {APIS.sceneRecognition}/>
      {/* <Upload
        name="img-name"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action= {APIS.sceneRecognition}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '600px'}} /> : uploadButton}
         </Upload>
         
         <Search 
          placeholder="请输入网络图片URL"
          enterButton="检测"
          size="large"
          style={{width:'600px'}}
          onSearch={value => console.log(value)}
       /> */}
       {/* 或
       <Upload {...props}>
       <Button type="primary">点击上传</Button>
        </Upload> */}
        </Col>
        <Col span={4}></Col>
      <Col span={6}>{this.state.result}</Col>
      
    </Row>
      </div>

      
    );
  }
}




