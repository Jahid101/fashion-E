import { Col, Row } from "antd";
import React from "react";
require("./index.less");

const index = (props: any) => {
  console.log("props", props);

  return (
    <div className="section-container">
      <Row>
        <Col>
          <img src={props?.data?.image} alt="Product" className="productByID"/>
        </Col>

        <Col></Col>
      </Row>
    </div>
  );
};

export default index;
