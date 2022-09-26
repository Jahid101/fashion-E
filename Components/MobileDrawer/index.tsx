import { Avatar, Drawer, Menu,Layout } from 'antd';
import Link from 'next/link';
import router from 'next/router';
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdShoppingBag } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiFileCopy2Line, RiFileTextLine } from "react-icons/ri";
import { IoMdPie } from "react-icons/io";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { GiGooeyEyedSun } from "react-icons/gi";
import React from 'react';
require('./index.less');


const { SubMenu } = Menu;
const { Sider } = Layout;


const index = (props: any) => {
    const { SubMenu } = Menu;


    return (
        <div>
            <Drawer
                title={
                    <img
                        onClick={() => {
                            router.push("/")
                        }}
                        className="cursor"
                        alt="Logo" src="/images/siteLogo.svg"></img>
                }
                placement="left"
                width={"100%"}
                className="navMobile"
                closable={true}
                onClose={() => { props.setVisible(false) }}
                visible={props.visible}
            >
                <div>
                    <div className="flex">
                        <div>
                            <Avatar
                                className="mr-10 ml-15 cursor"
                                style={{ width: 85, height: 85, border: "1px solid #c9c1c1" }}
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
                        </div>

                        <div className="ml-15 m-auto">
                            <div className="wordBreak primary-color text-18">{"Alexa Jui"}</div>
                            <div className="wordBreak white-color">{"alexajui@gmail.com"}</div>
                        </div>
                    </div>

                    <div className="mt-50">
                        
                        <Menu
                            theme="light"
                            mode="inline"
                        defaultOpenKeys={[props?.defaultOpenKeys]}
                        selectedKeys={[props?.defaultSelectedKeys]}
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

                </div>
            </Drawer >
        </div>
    );
};

export default index;
