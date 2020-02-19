import React from "react";
import { Form, Icon, Input, Button, Checkbox, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { __RouterContext } from "react-router";

import * as actions from "../../Store/Actions/authActions";

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.username, values.password);
        this.props.history.push("/");
      }
    });
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.props.loading ? (
          <Spin size="large" />
        ) : (
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
            style={{ maxWidth: "300px" }}
          >
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ marginRight: "30px" }}
              >
                Log in
              </Button>
              Or <NavLink to="/register"> Register now!</NavLink>
            </Form.Item>
          </Form>
        )}
      </div>
    );
  }
}

const LoginForm = Form.create({ name: "normal_login" })(Login);

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  onAuth: (username, password) =>
    dispatch(actions.authLogin(username, password))
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
