import { Upload, Icon, message ,Input,Button,Row, Col} from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import { APIS } from '../conf/APIS'
import { Typography, Divider } from 'antd';
import PropTypes from 'prop-types';
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
const props = {
  name: 'file',
  action: APIS.sceneRecognition,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export  class Recognition extends React.Component {

    constructor(props){
        super(props);
        
    }
  state = {
    loading: false,
    response : null,
    prediction : null
  };

  // componentDidMount() {
  //   fetch(APIS.sexRecogniiton).then(function(response){
  //     console.log(response);
  //   }).then(function(data){
  //     console.log(data);
  //   });
  // }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log(info.file.response.result);
      
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
          response : info.file.response.result.model,
          prediction : info.file.response.result.prediction,
        }),
      );
      this.props.onChange(info.file.response);
    }
  };

 getResult = () => {
      return (
        <div>
          识别结果
          {this.state.prediction ?this.state.prediction.map((item,index)=>{
            return <tr key={index} >
              <td>{item.classes}</td>
              <td>{item.probs}</td>
            </tr>
          }): null
          }
        </div>
      );
  }

  
  render() {
    const uploadButton = (
      <div style={{height:'180px',width:'600px',marginTop:'30%'}}>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    
    
    
    const { imageUrl } = this.state;
    return (
      <div>
      <Upload
        name="img-name"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action= {this.props.url}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        >
        {imageUrl ? <img src={imageUrl} alt="Recognition" style={{ width: '600px'}} /> : uploadButton}
         </Upload>
         
         {/* <Search 
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
        </div>
      
    );
  }


  static propsType = {
    onChange: PropTypes.func,
    url : PropTypes.string
  }
}




