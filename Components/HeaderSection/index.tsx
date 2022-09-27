import { Button, Col, message, Row } from "antd";
import React from "react";
import Countdown from "react-countdown";
require("./index.less");

const index = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a complete state
      return <div>No Available Offer Today</div>;
    } else {
      // Render a countdown
      return (
        <div className="timeDiv">
          <div className="timeOffer">50% Discount Till</div>

          <div className="timeFlex">
            <div>
              <div className="timeTitle">
                {days}
                <span className="timeTitle ml-5 mr-5">:</span>
              </div>
              <div className="timeText">Days</div>
            </div>
            <div>
              <div className="timeTitle">
                {hours}
                <span className="timeTitle ml-5 mr-5">:</span>
              </div>
              <div className="timeText ml-5">Hours</div>
            </div>
            <div>
              <div className="timeTitle">
                {minutes}
                <span className="timeTitle ml-5 mr-5">:</span>
              </div>
              <div className="timeText">Minutes</div>
            </div>
            <div>
              <div className="timeTitle">{seconds}</div>
              <div className="timeText">Seconds</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="section-container">
      <Row className="headerSection">
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="leftSide">
          <div className="headerTitle">Top Designers Pick</div>
          <div className="headerText">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less
          </div>
          <Button
            type="primary"
            className="mb-50 btn"
            onClick={() => {
              message.warn("Coming soon");
            }}
          >
            Shop Now
          </Button>

          <div>
            <Countdown date={Date.now() + 500000000} renderer={renderer} />
          </div>
        </Col>

        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="rightSide">
          {/* <div> */}
            <img src="/images/hero.png" alt="" />
          {/* </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default index;
