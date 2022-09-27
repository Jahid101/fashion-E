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

  const [btnLoad, setBtnLoad] = useState(false);

  const [fname, setFname] = useState({ value: "", validateStatus: "" } as any);
  const [lname, setLname] = useState({ value: "", validateStatus: "" } as any);
  const [email, setEmail] = useState({ value: "", validateStatus: "" } as any);
  const [password, setPassword] = useState({
    value: "",
    validateStatus: "",
  } as any);
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    validateStatus: "",
  } as any);
  const [address, setAddress] = useState({
    value: "",
    validateStatus: "",
  } as any);
  const [phone, setPhone] = useState({ value: "", validateStatus: "" } as any);

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

    if (fname.validateStatus == "error") {
      error = false;
    }
    if (lname.validateStatus == "error") {
      error = false;
    }
    if (email.validateStatus == "error") {
      error = false;
    }
    if (password.validateStatus == "error") {
      error = false;
    }
    if (confirmPassword.validateStatus == "error") {
      error = false;
    }
    if (address.validateStatus == "error") {
      error = false;
    }
    if (phone.validateStatus == "error") {
      error = false;
    }

    if (fname.value.trim() == "") {
      error = false;
      setFname({
        ...setValidation("error", "First Name is required"),
        value: fname.value.trim(),
      });
      error = false;
    }

    if (lname.value.trim() == "") {
      error = false;
      setLname({
        ...setValidation("error", "Last Name is required"),
        value: lname.value.trim(),
      });
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
    } else if (password.value.length < 8) {
      setPassword({
        ...setValidation("error", "Password should have at least 8 characters"),
        value: password.value.trim(),
      });
      error = false;
    }

    if (confirmPassword.value.trim() == "") {
      error = false;
      setConfirmPassword({
        ...setValidation("error", "Password is required"),
        value: confirmPassword.value.trim(),
      });
      error = false;
    } else if (confirmPassword.value != password.value) {
      setConfirmPassword({
        ...setValidation("error", "Password don't match"),
        value: confirmPassword.value.trim(),
      });
      error = false;
    }

    if (address.value.trim() == "") {
      error = false;
      setAddress({
        ...setValidation("error", "Address is required"),
        value: address.value.trim(),
      });
      error = false;
    }

    let phoneValidator = /^(0|[1-9][0-9]*)$/;
    if (phone.value.trim() == "") {
      error = false;
      setPhone({
        ...setValidation("error", "Phone number is required"),
        value: phone.value.trim(),
      });
      error = false;
    } else if (!phoneValidator.test(phone.value.trim())) {
      setPhone({
        ...setValidation("error", "Invalid Phone number"),
        value: phone.value.trim(),
      });
      error = false;
    }

    return error;
  };

  const submit = () => {
    message.success("Account created successfully");

    setFname({ value: "", validateStatus: "" } as any);
    setLname({ value: "", validateStatus: "" } as any);
    setEmail({ value: "", validateStatus: "" } as any);
    setPassword({ value: "", validateStatus: "" } as any);
    setConfirmPassword({ value: "", validateStatus: "" } as any);
    setAddress({ value: "", validateStatus: "" } as any);
    setPhone({ value: "", validateStatus: "" } as any);

    setBtnLoad(false);
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
          <div>
            <Row className="mt-30 leftPadding">
              <Col span={24} className="colRight mb-15">
                <div className="inputTitle">
                  First Name<span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={fname.validateStatus as ValidateStatus}
                  help={fname.errorMsg || ""}
                >
                  <Input
                    value={fname.value}
                    onChange={(e) => {
                      setFname({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>

              <Col span={24} className="colRight mb-15">
                <div className="inputTitle">
                  Last Name<span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={lname.validateStatus as ValidateStatus}
                  help={lname.errorMsg || ""}
                >
                  <Input
                    value={lname.value}
                    onChange={(e) => {
                      setLname({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>

              <Col span={24} className="colRight mb-15">
                <div className="inputTitle">
                  Email<span className="primary-color">*</span>
                </div>
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
                <div className="inputTitle">
                  Create Password<span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={password.validateStatus as ValidateStatus}
                  help={password.errorMsg || "Password Must be 8-10 Characters"}
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

              <Col span={24} className="colLeft mb-15">
                <div className="inputTitle">
                  Confirm Password<span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={
                    confirmPassword.validateStatus as ValidateStatus
                  }
                  help={confirmPassword.errorMsg || ""}
                >
                  <Input
                    value={confirmPassword.value}
                    onChange={(e) => {
                      setConfirmPassword({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>

              <Col span={24} className="colLeft mb-15">
                <div className="inputTitle">
                  Address<span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={address.validateStatus as ValidateStatus}
                  help={address.errorMsg || ""}
                >
                  <Input
                    value={address.value}
                    onChange={(e) => {
                      setAddress({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>

              <Col span={24} className="colLeft mb-15">
                <div className="inputTitle">
                  Phone<span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={phone.validateStatus as ValidateStatus}
                  help={phone.errorMsg || ""}
                >
                  <Input
                    value={phone.value}
                    onChange={(e) => {
                      setPhone({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Button
              className="submitBtn mt-30"
              htmlType="submit"
              type="primary"
              loading={btnLoad}
            >
              Sign Up
            </Button>

            <Divider plain style={{ borderColor: "black" }}>
              <span className="weight-600">or</span>
            </Divider>

            <div className="text-center weight-600 m-auto text-10 mb-10">
              Sign up with
            </div>
            <div className="text-center mb-30">
              <img
                src="/images/google.svg"
                alt=""
                className="mr-20 cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />
              <img
                src="/images/fb2.svg"
                alt=""
                className="mr-20 cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />
              <img
                src="/images/ln.svg"
                alt=""
                className="cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />
            </div>

            <div className="text-10 text-center flex mb-50 privacy">
              <div
                className="cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              >
                Privacy Policy and Cookies
              </div>

              <div className="weight-600 ml-10 mr-10">|</div>

              <div
                className="cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              >
                Terms of Sale and Us
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default index;
