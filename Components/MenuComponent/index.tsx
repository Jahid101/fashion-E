import {
  DollarOutlined,
  FundOutlined,
  HddOutlined,
  IdcardOutlined,
  PieChartOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdShoppingBag } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiFileCopy2Line, RiFileTextLine } from "react-icons/ri";
import { IoMdPie } from "react-icons/io";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { GiGooeyEyedSun } from "react-icons/gi";
import router from "next/router";
import React from "react";
require("./index.less");

const { SubMenu } = Menu;
const { Sider } = Layout;

const index = (props: any) => {
  return (
    <div className="menu-space-between forPcLeft">
      <Sider
        className={
          props.collapsed ? "ant-layout-sider-light2" : "ant-layout-sider-light"
        }
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        trigger={null}
        theme="light"
      >
        <div>
          <a href="/">
            <div
              onClick={() => {
                router.push("/");
              }}
              className="cursor logo mb-30 text-center"
              style={{ padding: 22 }}
            >
              <img src="/images/siteLogo.svg" className="siteLogo" />
            </div>
          </a>

          <Menu
            theme="light"
            mode="inline"
            defaultOpenKeys={[props.defaultOpenKeys]}
            selectedKeys={[props.defaultSelectedKeys]}
          >
            <Menu.Item key="1" icon={<MdDashboard />} className="mb-20">
              <Link href="/">Dashboard</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<GiMagnifyingGlass />} className="mb-20">
              <Link href="/lookup">Lookup</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<RiFileCopy2Line />} className="mb-15">
              <Link href="/files">Files</Link>
            </Menu.Item>

            <SubMenu
              key="4"
              icon={<BsFillFileEarmarkTextFill />}
              title="Logs"
              className="mb-15"
            >
              <Menu.Item key="42" icon={<RiFileTextLine />}>
                <Link href="/logs/lookup">Single/Bulk Lookup</Link>
              </Menu.Item>
              <Menu.Item key="43" icon={<IoMdPie />}>
                <Link href="/logs/daily-usages">Daily Usages</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="5" icon={<MdShoppingBag />} className="mb-20">
              <Link href="/buy-credits">Buy Credits</Link>
            </Menu.Item>

            <Menu.Item key="6" icon={<GiGooeyEyedSun />} className="mb-20">
              <Link href="/integrations">Integrations</Link>
            </Menu.Item>

            <Menu.Item key="7" icon={<FaUserCircle />} className="mb-20">
              <Link href="/my-profile">My Profile</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </div>
  );
};

export default index;
