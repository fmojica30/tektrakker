import React, { useState } from "react";
import axios from "../../axiosInstance";

import { Row, Col, Form, Icon, Input, Button, Card } from "antd";

const NewStudentForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const resetState = () => {
    setFirstName("");
    setLastName("");
  };

  const submitStudentHandler = e => {
    e.preventDefault();
    const studentObject = {
      first_name: firstName,
      last_name: lastName
    };

    resetState();
    // console.log(studentObject);
    axios
      .post("/api/student/", studentObject)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Row gutter={[8, 8]} type="flex" style={{ alignItems: "center" }}>
      <Col span={8}></Col>
      <Col span={8}>
        <Card title="New Student" bordered>
          <Form
            className="login-form"
            onSubmit={event => submitStudentHandler(event)}
          >
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="First Name"
              style={{ marginBottom: "30px" }}
              size="large"
              onChange={e => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            />
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Last Name"
              style={{ marginBottom: "30px" }}
              size="large"
              onChange={e => {
                setLastName(e.target.value);
              }}
              value={lastName}
            />
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

export default NewStudentForm;
