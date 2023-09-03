import React  from "react";
import './Login.scss'
import { Button , Form, Input } from 'antd';


export default function Login(){
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="login">
            <div className="content">
                <h2>酒店管理系统</h2>
            <Form
    name="basic"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 18,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="账号"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="密码"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 4,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        登录
      </Button>
      <Button  style={{marginLeft:'10px'}} htmlType="cancel">
        取消
      </Button>
    </Form.Item>
  </Form>
            </div>
        </div>
    )
}