import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const ContactUs = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
     
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        
        style={{
          maxWidth: 600,
        }}
      >
       
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input />
        </Form.Item>
     
       
       <Button>Submit</Button>
      
      
      </Form>
    </div>
  );
};
export default ContactUs