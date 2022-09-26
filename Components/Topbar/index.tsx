import { Drawer, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// CSS
require("./index.less");

const index = (props: any) => {
  return (
    <div className="topbarDiv">
      <div className="topbarTitle">Free shipping on all UK orders!</div>
      <div>
        <img
          src="/images/fb.svg"
          className="mr-15 cursor"
          alt="Facebook"
          onClick={() => {
            message.warn("Coming soon!");
          }}
        />
        <img
          src="/images/insta.svg"
          className="mr-15 cursor"
          alt="Instagram"
          onClick={() => {
            message.warn("Coming soon!");
          }}
        />
        <img
          src="/images/pin.svg"
          className="cursor"
          alt="Pinterest"
          onClick={() => {
            message.warn("Coming soon!");
          }}
        />
      </div>
    </div>
  );
};

export default index;
