import { Button, Col, Divider, Form, Input, message, Row, Switch } from "antd";
import { ValidateStatus } from "antd/es/form/FormItem";
import React, { useState } from "react";
import UserDataActions from "redux/actions/DataActions";
require("./index.less");

const index = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData]: any = useState([]);

  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(true);
  const [option4, setOption4] = useState(true);

  const [btnLoad, setBtnLoad] = useState(false);

  const [email, setEmail] = useState({ value: "", validateStatus: "" } as any);
  const [credits, setCredits] = useState({
    value: "",
    validateStatus: "",
  } as any);

  const onChange1 = (checked: boolean) => {
    setOption1(checked);
  };

  const onChange2 = (checked: boolean) => {
    setLoading(true);
    setOption2(checked);

    UserDataActions.getData(5,
      (success: any) => {
        console.log("success=>", success);
        setLoading(false);
        setData(success);
      },
      (error: any) => {
        console.log("error=>", error);
        setLoading(false);
      }
    );
  };

  const onChange3 = (checked: boolean) => {
    setOption3(checked);
  };
  const onChange4 = (checked: boolean) => {
    setOption4(checked);
  };

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
    if (credits.validateStatus == "error") {
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

    let creditValidator = /^(0|[1-9][0-9]*)$/;
    if (credits.value.trim() == "") {
      error = false;
      setCredits({
        ...setValidation("error", "Credits are required"),
        value: credits.value.trim(),
      });
      error = false;
    } else if (!creditValidator.test(credits.value.trim())) {
      setCredits({
        ...setValidation("error", "Invalid Credit"),
        value: credits.value.trim(),
      });
      error = false;
    }

    return error;
  };

  const submit = () => {
    message.success("Changes submitted successfully");
    setEmail({ value: "", validateStatus: "" } as any);
    setCredits({ value: "", validateStatus: "" } as any);
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
          <div className="mt-30 flex flex-center-v">
            <Switch onChange={onChange1} checked={option1} />
            <span
              className={
                option1 ? "options wordBreak" : "optionsInactive wordBreak"
              }
            >
              Notify me when list verification completes
            </span>
          </div>

          <div className="mt-30 flex flex-center-v">
            <Switch onChange={onChange2} checked={option2} loading={loading} />
            <span
              className={
                option2 ? "options wordBreak" : "optionsInactive wordBreak"
              }
            >
              Get Users Data
            </span>
          </div>

          <div className="mt-15">
            {data?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <span
                    style={
                      item.id % 2 == 0 ? { color: "red" } : { color: "green" }
                    }
                  >
                    {item.id}
                  </span>{" "}
                  - Category: {item?.category}
                </div>
              );
            })}
          </div>

          <div className="mt-30 flex flex-center-v">
            <Switch onChange={onChange3} checked={option3} />
            <span
              className={
                option3 ? "options wordBreak" : "optionsInactive wordBreak"
              }
            >
              Notify me when list verification result is about to expire
            </span>
          </div>

          <Divider />

          <div className="mt-30 flex flex-center-v">
            <Switch onChange={onChange4} checked={option4} />
            <span
              className={
                option4 ? "options wordBreak" : "optionsInactive wordBreak"
              }
            >
              Receive Low Credits Email
            </span>
          </div>

          {option4 && (
            <Row className="mt-30 leftPadding" gutter={[30, 30]}>
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="colRight"
              >
                <div className="inputTitle">
                  Send Email to<span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={email.validateStatus as ValidateStatus}
                  help={email.errorMsg || ""}
                >
                  <Input
                    value={email.value}
                    placeholder="Email"
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

              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="colLeft"
              >
                <div className="inputTitle">
                  When credits are less than
                  <span className="primary-color">*</span>
                </div>
                <Form.Item
                  className="form-label-bottom-item"
                  validateStatus={credits.validateStatus as ValidateStatus}
                  help={credits.errorMsg || ""}
                >
                  <Input
                    value={credits.value}
                    placeholder="Credits"
                    onChange={(e) => {
                      setCredits({
                        validateStatus: "success",
                        value: e.target.value,
                      });
                    }}
                    className="inputField"
                  />
                </Form.Item>
              </Col>
            </Row>
          )}

          <Button
            className="submitBtn mt-30"
            htmlType="submit"
            type="primary"
            loading={btnLoad}
          >
            Save Changes
          </Button>

          <Divider />
        </Form>
      </div>
    </div>
  );
};

export default index;
