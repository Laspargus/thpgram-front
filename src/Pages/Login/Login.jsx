import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFail,
  loginRequest,
} from "./../../Redux/Auth/actions";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    fetchAuthApi(values);
  };

  const fetchAuthApi = ({ email, password }) => {
    const data = {
      user: {
        email,
        password,
      },
    };
    dispatch(loginRequest());

    fetch("http://localhost:3000/login", {
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
      .then((res) =>
        res
          .json()
          .then((json) => ({
            token: res.headers.get("authorization").split(" ")[1],
            json,
          }))
          .then(({ token, json }) => {
            dispatch(loginSuccess(json, token));
            Cookies.set("user_id", json.id);
            Cookies.set("user_token", token);
            history.push("/");
          })
      )
      .catch((error) => {
        dispatch(loginFail(error));
        alert(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="card mt-5 p-5"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
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

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
