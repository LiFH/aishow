import { Upload, Icon, message ,Input} from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import { APIS } from '../conf/APIS'
import { Typography, Divider } from 'antd';

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

export default class Avatar extends React.Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    fetch(APIS.sexRecogniiton).then(function(response){
      console.log(response);
    }).then(function(data){
      console.log(data);
    });
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (
      <div style={{height:'200px',width:'500px'}}>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
  
    

    const { imageUrl } = this.state;
    return (
      <div>
        <Typography>
        <Title>人脸识别</Title>
        <Paragraph>
        待写。。
        </Paragraph>
        <Divider />
      </Typography>
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action= {APIS.sceneRecognition}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '500%'}} /> : uploadButton}
         </Upload>
         <Search 
          placeholder="请输入网络图片URL"
          enterButton="检测"
          size="large"
          onSearch={value => console.log(value)}
       />
      </div>
      
    );
  }
}




