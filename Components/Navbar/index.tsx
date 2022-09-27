import MobileDrawer from "@Components/MobileDrawer";
import { Drawer, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

// CSS
require("./index.less");

const index = (props: any) => {
  let myNav: any;

  const [visible, setVisible] = useState(false);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    myNav = document.getElementById("header-menu-container3");
    handleScroll();
    window.addEventListener("scroll", handleScroll, true);
  }, []);

  //Changing the class while scrolling
  let handleScroll = () => {
    // @ts-ignore
    if (props.default === undefined || props.default) {
      if (window.pageYOffset >= 100) {
        setLogo(true);
        myNav.classList.remove("nav-without-colored3");
        myNav.classList.add("nav-colored3");
      } else {
        setLogo(false);
        myNav.classList.add("nav-without-colored3");
        myNav.classList.remove("nav-colored3");
      }
    } else {
      setLogo(true);
      myNav.classList.add("nav-colored3");
      myNav.classList.remove("nav-without-colored3");
    }
  };

  return (
    <>
      <div
        id="header-menu-container3"
        className="header-menu-container3 full-width"
      >
        <div className="desktop-menu header-menu flex space-between full-width">
          <div className="left-menu flex flex-center-v">
            <div className="header-menu-items flex flex-center-v">
              <div className="flex flex-center-v imLogo">
                <div className="menu-logo">
                  <Link href="/">
                    <a href="/">
                      <div
                        className="navbarTitle"
                        style={{ marginLeft: "70px" }}
                      >
                        Funshion
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="right-menu flex flex-center-v">
            <div className="">
              <Link href="/">
                <a href="/">
                  <div className="header-menu-item3 helvetica cursor">Home</div>
                </a>
              </Link>
            </div>

            <div className="">
              <Link href="/about">
                <a href="/about">
                  <div className="header-menu-item3 helvetica cursor">
                    About
                  </div>
                </a>
              </Link>
            </div>

            <div className="">
              <Link href="/shop">
                <a href="/shop">
                  <div className="header-menu-item3 helvetica cursor">Shop</div>
                </a>
              </Link>
            </div>

            <div className="">
              <Link href="/pages">
                <a href="/pages">
                  <div className="header-menu-item3 helvetica cursor">
                    Pages
                  </div>
                </a>
              </Link>
            </div>

            <div className="">
              <Link href="/blog">
                <a href="/blog">
                  <div className="header-menu-item3 helvetica cursor">Blog</div>
                </a>
              </Link>
            </div>

            <div className="flex ml-50">
              <div className="mr-35">
                <img
                  src="/images/magnify.svg"
                  alt=""
                  className="cursor"
                  onClick={() => {
                    message.warn("Coming soon");
                  }}
                />
              </div>

              <div className="mr-35">
                <Link href="/login">
                  <a href="/login">
                    <img src="/images/avatar.svg" alt="" className="cursor" />
                  </a>
                </Link>
              </div>

              <div className="">
                <img
                  src="/images/brifcase.svg"
                  alt=""
                  className="cursor"
                  onClick={() => {
                    message.warn("Coming soon");
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu" style={{ width: "100%" }}>
          <div>
            <AiOutlineMenu
              style={{ fontSize: "24px", fontWeight: 500 }}
              className=""
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>
          <div className="m-auto">
            <Link href="/">
              <a href="/">
                <div className="navbarTitle">Funshion</div>
              </a>
            </Link>
          </div>
        </div>
        <MobileDrawer visible={visible} setVisible={setVisible}></MobileDrawer>
      </div>
    </>
  );
};

export default index;
