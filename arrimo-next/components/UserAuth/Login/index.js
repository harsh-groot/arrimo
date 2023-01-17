import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";

const Login = () => {
  const [loginForm] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div>
      <h2 className="text-center">Welcome Back</h2>
      <p className="text-center mb-5">
        Enter your credentials to access your account.
      </p>

      <Form
        form={loginForm}
        name="login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="identifier"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
