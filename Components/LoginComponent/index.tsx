import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  message,
  Radio,
  RadioChangeEvent,
  Row,
  Switch,
} from "antd";
import { ValidateStatus } from "antd/es/form/FormItem";
import React, { useState } from "react";
import UserDataActions from "redux/actions/UserDataActions";
require("./index.less");

const index = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData]: any = useState([]);

  const [value, setValue] = useState(1);

  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(true);
  const [option4, setOption4] = useState(true);

  const [btnLoad, setBtnLoad] = useState(false);

  const [email, setEmail] = useState({ value: "", validateStatus: "" } as any);
  const [password, setPassword] = useState({
    value: "",
    validateStatus: "",
  } as any);

  // validation status
  function setValidation(status: any, message: any) {
    return {
      validateStatus: status,
      errorMsg: message,
    };
  }

  // Submitting form data
  const onSubmit = (values: any) => {
    if (validate()) {
      // submit();
      setBtnLoad(true);
      setTimeout(submit, 1000);
    }
  };

  // Validating information
  const validate = () => {
    let error = true;

    if (email.validateStatus == "error") {
      error = false;
    }
    if (password.validateStatus == "error") {
      error = false;
    }

    email.value = email.value.trim();
    if (email.value.trim() == "") {
      error = false;
      setEmail({
        ...setValidation("error", "Email is required"),
        value: email.value.trim(),
      });
      error = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      setEmail({
        ...setValidation("error", "Invalid Email Address"),
        value: email.value.trim(),
      });
      error = false;
    }

    if (password.value.trim() == "") {
      error = false;
      setPassword({
        ...setValidation("error", "Password is required"),
        value: password.value.trim(),
      });
      error = false;
    } else if (password.value.length < 6) {
      setPassword({
        ...setValidation("error", "Password should have at least 6 characters"),
        value: password.value.trim(),
      });
      error = false;
    }

    return error;
  };

  const submit = () => {
    message.success("Login Successful");
    setEmail({ value: "", validateStatus: "" } as any);
    setPassword({ value: "", validateStatus: "" } as any);
    setBtnLoad(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="middleSection">
      <div className="">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          className="custom-row-space-height"
        >
          <div className="loginDiv">
            <div className="loginDivTitle">
              <div>WELCOME</div>
              <div>PLEASE SIGN IN!</div>
            </div>

            <div className="loginDivRadio">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Sign In</Radio>
                <Radio value={2}>Create Account</Radio>
              </Radio.Group>
            </div>

            <Row className="mt-30 leftPadding">
              <Col span={24} className="colRight mb-15">
                <div className="inputTitle">Email</div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={email.validateStatus as ValidateStatus}
                  help={email.errorMsg || ""}
                >
                  <Input
                    value={email.value}
                    onChange={(e) => {
                      setEmail({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>

              <Col span={24} className="colLeft mb-15">
                <div className="inputTitle">Password</div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={password.validateStatus as ValidateStatus}
                  help={password.errorMsg || ""}
                >
                  <Input
                    value={password.value}
                    onChange={(e) => {
                      setPassword({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>
            </Row>

            <div className="flex space-between forgotPass mb-30">
              <div>Forgot Your Password</div>
              <div>
                <Checkbox onChange={() => {}} defaultChecked>
                  Remember Me
                </Checkbox>
              </div>
            </div>

            <Button
              className="submitBtn mt-30"
              htmlType="submit"
              type="primary"
              loading={btnLoad}
            >
              Sign In
            </Button>

            <Divider plain style={{ borderColor: "black" }}>
              or
            </Divider>

            <small className="text-center">Sign in with</small>

            <div className="text-center">
              <img src="/images/google.svg" alt="" className="mr-10 cursor" />
              <img src="/images/fb2.svg" alt="" className="mr-10 cursor" />
              <img src="/images/ln.svg" alt="" className="cursor" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default index;
