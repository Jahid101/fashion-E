import { Drawer } from 'antd';
import Link from "next/link";
import React, { useEffect, useState } from "react";

// CSS
require("./index.less");


const index = (props: any) => {

    let myNav: any;

    const [visible, setVisible] = useState(false);
    const [logo, setLogo] = useState(false);

    useEffect(() => {
        myNav = document.getElementById('header-menu-container3');
        handleScroll()
        window.addEventListener('scroll', handleScroll, true);
    }, []);

    //Changing the class while scrolling
    let handleScroll = () => {
        // @ts-ignore
        if (props.default === undefined || props.default) {

            if (window.pageYOffset >= 100) {
                setLogo(true);
                myNav.classList.remove("nav-without-colored3");
                myNav.classList.add("nav-colored3");
            }
            else {
                setLogo(false);
                myNav.classList.add("nav-without-colored3");
                myNav.classList.remove("nav-colored3");
            }
        } else {
            setLogo(true);
            myNav.classList.add("nav-colored3");
            myNav.classList.remove("nav-without-colored3");
        }
    }



    return (
        <>
            <div id="header-menu-container3" className="header-menu-container3 full-width">
                <div className="desktop-menu header-menu flex space-between full-width">
                    <div className="left-menu flex flex-center-v">
                        <div className="header-menu-items flex flex-center-v">

                            <div className="flex flex-center-v imLogo">
                                <div className="menu-logo">
                                    <a href="/">
                                        <img
                                            className="cursor margin-left"
                                            alt="landing-logo"
                                            src={"/images/impromekLogo2.svg"}>
                                        </img>
                                    </a>
                                </div>
                            </div>

                            <div className="">
                                <Link href="/" >
                                    <a href="/"><div className="header-menu-item3 helvetica cursor">Home</div></a>
                                </Link>
                            </div>

                            <div className="">
                                <Link href="/mentor-list" >
                                    <a href="/mentor-list"><div className="header-menu-item3 helvetica cursor">Mentors List</div></a>
                                </Link>
                            </div>

                            <div className="">
                                <Link href="/how-it-works" >
                                    <a href="/how-it-works"><div className="header-menu-item3 helvetica cursor">How It Works</div></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex flex-center-v">
                        <div className="menu-logo">
                            <a href="/">
                                <img
                                    className="cursor margin-left"
                                    alt="landing-logo"
                                    src={logo ? "/images/impromekLogo2.svg" : "/images/impromekLogo.svg"}>
                                </img>
                            </a>
                        </div>
                    </div> */}

                    <div className="right-menu flex flex-center-v">
                        <div className="">
                            <Link href="/registration" >
                                <a href="/registration"><div className="header-menu-item3 helvetica cursor">Register</div></a>
                            </Link>
                        </div>

                        <div className="loginBtn">
                            <Link href="/login" >
                                <a href="/login"><div className="header-menu-item3 helvetica cursor">Login</div></a>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="mobile-menu" style={{ width: '100%' }}>
                    {/* <img alt="ham-burger" onClick={() => { setVisible(true) }} src={logo ? "/landing/hamwhite.svg" : "/images/ham.svg"}></img> */}
                    <img alt="ham-burger" onClick={() => { setVisible(true) }} src={logo ? "/landing/hamwhite.svg" : "/landing/hamwhite.svg"}></img>
                    <div style={{ width: '100%' }} className="center">
                        <div className="menu-logo">
                            <a href="/">
                                <img
                                    className="cursor"
                                    alt="impromekLogo" src={logo ? "/images/impromekLogo2.svg" : "/images/impromekLogo2.svg"}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Drawer
                title="Menu"
                placement="left"
                width={"100%"}
                closable={true}
                onClose={() => { setVisible(false) }}
                visible={visible}
            >
                <div className="listBody">
                    <Link href="/" >
                        <a href="/"><div className="">Home</div></a>
                    </Link>
                </div>

                <div className="listBody">
                    <Link href="/mentor-list" >
                        <a href="/mentor-list"><div className="">Mentors List</div></a>
                    </Link>
                </div>

                <div className="listBody">
                    <Link href="/how-it-works" >
                        <a href="/how-it-works"><div className="">How It Works</div></a>
                    </Link>
                </div>

                <div className="listBody">
                    <Link href="/login" >
                        <a href="/login"><div className="">Login</div></a>
                    </Link>
                </div>

                <div className="listBody">
                    <Link href="/registration" >
                        <a href="/registration"><div className="">Register</div></a>
                    </Link>
                </div>
            </Drawer >
        </>
    );
};

export default index;
