import { Button, Col, message, Row } from "antd";
import React from "react";
require("./index.less");

const index = () => {
  return (
    <div className="section-container">
      <Row gutter={[30, 30]}>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div className="deliveryDiv">
            <div>
              <img src="/images/delivery.svg" alt="" />
            </div>
            <div className="ml-10">
              <div className="deliveryTitle">FAST DELIVERY</div>
              <div className="deliverySubTitle">
                Lorem Ipsum is simply dummy text{" "}
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div className="deliveryDiv">
            <div>
              <img src="/images/delivery.svg" alt="" />
            </div>
            <div className="ml-10">
              <div className="deliveryTitle">FAST DELIVERY</div>
              <div className="deliverySubTitle">
                Lorem Ipsum is simply dummy text{" "}
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div className="deliveryDiv">
            <div>
              <img src="/images/delivery.svg" alt="" />
            </div>
            <div className="ml-10">
              <div className="deliveryTitle">FAST DELIVERY</div>
              <div className="deliverySubTitle">
                Lorem Ipsum is simply dummy text{" "}
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div className="deliveryDiv">
            <div>
              <img src="/images/delivery.svg" alt="" />
            </div>
            <div className="ml-10">
              <div className="deliveryTitle">FAST DELIVERY</div>
              <div className="deliverySubTitle">
                Lorem Ipsum is simply dummy text{" "}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default index;
