import { Avatar, Drawer, Menu, Layout, message } from "antd";
import Link from "next/link";
import router from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdShoppingBag } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiFileCopy2Line, RiFileTextLine } from "react-icons/ri";
import { IoMdPie } from "react-icons/io";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestSquare } from "react-icons/fa";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  ProfileOutlined,
  SnippetsOutlined,
  IssuesCloseOutlined,
} from "@ant-design/icons";
import React from "react";
require("./index.less");

const { SubMenu } = Menu;
const { Sider } = Layout;

const index = (props: any) => {
  const { SubMenu } = Menu;

  return (
    <div>
      <Drawer
        title={
          <Link href="/">
            <a href="/">
              <div
                className="navbarTitle primary-color"
                style={{ marginLeft: "20px" }}
              >
                Funshion
              </div>
            </a>
          </Link>
        }
        placement="left"
        width={"100%"}
        className="navMobile"
        closable={true}
        onClose={() => {
          props.setVisible(false);
        }}
        visible={props.visible}
      >
        <div>
          <div className="flex">
            <div>
              <Avatar
                className="mr-10 ml-15 cursor"
                style={{ border: "1px solid #c9c1c1" }}
                size={85}
                //@ts-ignore
                icon={<img src="/images/profileBig.svg" alt="" />}
                shape="circle"
              />
            </div>

            <div className="ml-15 m-auto">
              <div className="wordBreak primary-color text-18">{"Mr. XYZ"}</div>
              <div className="wordBreak white-color">{"xyz@gmail.com"}</div>
            </div>
          </div>

          <div className="mt-50">
            <Menu
              theme="light"
              mode="inline"
              defaultOpenKeys={[props?.defaultOpenKeys]}
              selectedKeys={[props?.defaultSelectedKeys]}
            >
              <Menu.Item key="1" icon={<HomeOutlined />} className="mb-20">
                <Link href="/">Home</Link>
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<IssuesCloseOutlined />}
                className="mb-20"
              >
                <Link href="/about">About</Link>
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<ShoppingCartOutlined />}
                className="mb-20"
              >
                <Link href="/shop">Shop</Link>
              </Menu.Item>

              <Menu.Item key="4" icon={<ProfileOutlined />} className="mb-20">
                <Link href="/pages">Pages</Link>
              </Menu.Item>

              <Menu.Item key="6" icon={<SnippetsOutlined />} className="mb-20">
                <Link href="/blog">Blog</Link>
              </Menu.Item>

              <Menu.Item key="7" icon={<UserOutlined />} className="mb-20">
                <Link href="/login">Login</Link>
              </Menu.Item>
            </Menu>
          </div>

          <div className="flex ml-20" style={{ justifyContent: "center" }}>
            <div className="mr-35">
              <GrFacebook
                className="cursor"
                style={{ color: "white", fontSize: "24px" }}
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />
            </div>

            <div className="mr-35">
              <BsInstagram
                style={{ color: "white", fontSize: "24px" }}
                className="cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />
            </div>

            <div className="">
              <FaPinterestSquare
                style={{ color: "white", fontSize: "24px" }}
                className="cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default index;
