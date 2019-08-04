
import styles from './superResolution.css';
import React from "react";
import { Typography, Divider } from 'antd';
import { Recognition } from '../components/Recognition';
import { APIS } from '../conf/APIS';

const { Title, Paragraph, Text } = Typography;


export default class SuperResolution extends React.Component {
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
render(){
  return (
    <div>
      <Typography>
        <Title>图像超分辨率</Title>
        <Paragraph>
        利用最新的图像处理和深度学习技术，在不损失照片质量的前提下提升其分辨率，使内容的呈现更清晰、更震撼。
        </Paragraph>
        <Divider />
      </Typography>
      <Recognition onChange={this.getChildState} url={APIS.superResolution}/>
      <img src={this.state.img} style={{width:'100%'}} />
    </div>
  );
}
  
}
