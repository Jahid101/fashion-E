import { Avatar, Col, message, Row } from 'antd';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
require('./index.less')



const index = () => {

    return (
        <div className="full-flex">
            {/* <Row>
                <Col span={8}> */}
            <div className="profileDiv">
                <Avatar
                    className="mr-10 ml-15 cursor"
                    style={{ width: 100, height: 100, border: "1px solid #c9c1c1" }}
                    //@ts-ignore
                    icon={
                        <img
                            src={"/images/profileBig.svg"}
                            onError={(e: any) => { }}
                            alt=""
                        />
                    }
                    shape="circle"
                />
                <div className="userName mt-15">Alexa Jui</div>
                <div className="userDetails mt-10">alexajui@gmail.com</div>
                <div className="userDetails mt-5">+1 354 785 4125</div>
                <div className="userDetails mt-5">3213 D Street, Columbus, USA</div>
            </div>
            {/* </Col>

                <Col span={16}> */}
            <div className="commonDiv">
                <div className="cardTitle">Your Credit Cards</div>

                <Row style={{ width: '100%' }} gutter={[30, 40]}>

                    <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                        <div className="insideCommonDiv">
                            <div className="text-right deleteDiv">
                                <span className="deleteIcon cursor" onClick={() => { message.warn("Coming soon") }}><RiDeleteBin6Line /></span>
                            </div>

                            <div className="cardSubTitle">
                                Credit Card 1
                            </div>
                            <div className="cardNumber">
                                xxxxxxxxxxxx4684
                            </div>
                        </div>
                    </Col>

                    <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                        <div className="insideCommonDiv">
                            <div className="text-right deleteDiv">
                                <span className="deleteIcon cursor" onClick={() => { message.warn("Coming soon") }}><RiDeleteBin6Line /></span>
                            </div>

                            <div className="cardSubTitle">
                                Credit Card 2
                            </div>
                            <div className="cardNumber">
                                xxxxxxxxxxxx4242
                            </div>
                        </div>
                    </Col>

                    <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                        <div className="insideCommonDiv">
                            <div className="text-right deleteDiv">
                                <span className="deleteIcon cursor" onClick={() => { message.warn("Coming soon") }}><RiDeleteBin6Line /></span>
                            </div>

                            <div className="cardSubTitle">
                                Credit Card 3
                            </div>
                            <div className="cardNumber">
                                xxxxxxxxxxxx1254
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>

            {/* </Col>
            </Row> */}
        </div>
    );
};

export default index;
