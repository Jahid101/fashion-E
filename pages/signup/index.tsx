import Footer from "@Components/Footer";
import LoginComponent from "@Components/LoginComponent";
import Navbar from "@Components/Navbar";
import SignupComponent from "@Components/SignupComponent";
import Topbar from "@Components/Topbar";
import AppLayout from "@layout/layout";
import {
  message,
  Radio,
  RadioChangeEvent
} from "antd";
import router from "next/router";
import { useState } from "react";
require("./index.less");

const index = () => {
  const [value, setValue] = useState(2);
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

    if (e.target.value == 1) {
      router.push("/login", undefined, { shallow: true });
    }
  };

  return (
    <AppLayout>
      <Topbar></Topbar>
      <Navbar></Navbar>

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

        {value == 1 ? (
          <LoginComponent></LoginComponent>
        ) : (
          <SignupComponent></SignupComponent>
        )}
      </div>
      <Footer></Footer>
    </AppLayout>
  );
};

export default index;
