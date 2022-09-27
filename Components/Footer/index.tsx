import { Col, Divider, Row } from "antd";
import Link from "next/link";
import React from "react";
require("./index.less");

const index = () => {
  return (
    <div className="footer">
      <Row gutter={[50, 30]} className="mb-50">
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <Link href="/">
            <a href="/">
              <div className="footerTitle">Funshion</div>
            </a>
          </Link>

          <div className="footerSubTitle">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </Col>

        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div className="footerTitle">Need Help?</div>
          <div className="footerSubTitle">Support</div>
          <div className="footerSubTitle">Get Started</div>
          <div className="footerSubTitle">Terms of like</div>
          <div className="footerSubTitle">Privacy Policy</div>
        </Col>

        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div className="footerTitle">Need Help?</div>
          <div className="footerSubTitle">Support</div>
          <div className="footerSubTitle">Get Started</div>
          <div className="footerSubTitle">Terms of like</div>
          <div className="footerSubTitle">Privacy Policy</div>
        </Col>

        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div className="footerTitle">Need Help?</div>
          <div className="footerSubTitle">Support</div>
          <div className="footerSubTitle">Get Started</div>
          <div className="footerSubTitle">Terms of like</div>
          <div className="footerSubTitle">Privacy Policy</div>
        </Col>
      </Row>

      <div className="dividerCss">
        <Divider></Divider>
      </div>
      <div className="copyRight">Copyright @ Funshion. All Right Reserved.</div>
    </div>
  );
};

export default index;
