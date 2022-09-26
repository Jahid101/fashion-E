import LoginComponent from "@Components/LoginComponent";
import Navbar from "@Components/Navbar";
import Topbar from "@Components/Topbar";
import AppLayout from "@layout/layout";
import { Button, Col, Divider, Form, Input, message, Row, Switch } from "antd";
import { ValidateStatus } from "antd/es/form/FormItem";
import React, { useState } from "react";
import UserDataActions from "redux/actions/UserDataActions";
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

  return (
    <AppLayout>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <LoginComponent></LoginComponent>
    </AppLayout>
  );
};

export default index;
