import { Avatar, Button, Dropdown, Menu, message } from "antd";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import Link from "next/link";
require("./index.less");

const index = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" className="mb-10">
        <Link href="/my-profile">My Profile</Link>
      </Menu.Item>

      <Menu.Item
        key="2"
        className="mb-10"
        onClick={() => {
          message.warn("Coming soon");
        }}
      >
        <div className="flex flex-center-v">
          <span>Add Fund</span>
        </div>
      </Menu.Item>

      <Menu.Item
        key="3"
        className="mb-10"
        onClick={() => {
          message.warn("Coming soon");
        }}
      >
        <div className="flex flex-center-v">
          <span>API Documentation</span>
        </div>
      </Menu.Item>

      <Menu.Item key="4">
        <div className="flex flex-center-v">
          <Button className="logoutBtn">
            <RiLogoutBoxLine />
            &nbsp;
            <span>Logout</span>
          </Button>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="height-100 flex align-center-justify">
      <div className="height-100 flex align-center fontMobile">
        <div>Balance : </div>
        <div className="price mr-25">&nbsp;$125</div>
      </div>

      <div className="avatarDiv">
        <Dropdown overlay={menu} trigger={["click"]} className="iamDropdown">
          <div className="flex flex-center-v text-right flex-end cursor">
            <Avatar
              className="mr-10 ml-15 cursor"
              style={{ width: 40, height: 40, border: "1px solid #c9c1c1" }}
              //@ts-ignore
              icon={
                <img
                  src={"/images/profileSmall.svg"}
                  onError={(e: any) => { }}
                  alt=""
                />
              }
              shape="circle"
            />

            <div className="mr-15 name" title={"Alexa Jui"}>
              {"Alexa Jui"}
            </div>

            <div className="mr-15">
              <BsChevronDown style={{ color: "#7D7D7E" }} />
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default index;
