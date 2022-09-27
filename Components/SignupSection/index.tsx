import { Form, Input } from "antd";
import { ValidateStatus } from "antd/es/form/FormItem";
import { useState } from "react";
require("./index.less");

const { Search } = Input;

const index = () => {
  const [email, setEmail] = useState({ value: "", validateStatus: "" } as any);
  const [btnLoad, setBtnLoad] = useState(false);
  
  const onSearch = (value: string) => {
    // setBtnLoad(true);
    // setTimeout(submit, 1000);
    console.log("Value: ", value);
  };

  return (
    <div className="signupSectionMargin">
      <div className="flexIt">
        <div className="leftSection"> 
          <div className="signupSectionTitle">SIGN UP FOR NEWS</div>
          <div className="signupSectionTitle">& GET 20% OFF</div>
          <div>
            <Form.Item
              className="form-label-bottom-item"
              validateStatus={email.validateStatus as ValidateStatus}
              help={email.errorMsg || ""}
            >
              <Search
                placeholder="Email"
                allowClear
                enterButton="Search"
                size="large"
                loading={btnLoad}
                onSearch={onSearch}
              />
            </Form.Item>
          </div>
        </div>

        <div>
          <div className="signupSectionInnerDiv">
            <img src="/images/shirt.png" alt="product" className="productImg cursor" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default index;
