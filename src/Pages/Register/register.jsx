import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import {
  registerSuccess,
  registerFail,
  registerRequest,
} from "./../../Redux/Auth/actions";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    fetchAuthApi(values);
  };

  const fetchAuthApi = ({
    first_name,
    last_name,
    username,
    email,
    password,
  }) => {
    const data = {
      user: {
        first_name,
        last_name,
        username,
        email,
        password,
        password_confirmation: password,
      },
    };
    dispatch(registerRequest());

    fetch("http://localhost:3000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        dispatch(registerSuccess(response));
        history.push("/login");
      })
      .catch((error) => {
        dispatch(registerFail(error));
        alert(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="card p-5 mt-5"
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Firstname"
        name="first_name"
        rules={[{ required: true, message: "Please input your firstname!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="last_name"
        rules={[{ required: true, message: "Please input your firstname!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
