import { LoadingOutlined } from "@ant-design/icons";
import AppLayout from "@layout/layout";
import { Spin } from "antd";
import React from "react";

const index = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <AppLayout>
      <Spin className="absolute-center" indicator={antIcon} />
      <div className="bottom-center primary-color text-18 weight-600">
        {/* <img style={{ width: "100px" }} src="/images/logo.png"></img> */}
        Funshion...
      </div>
    </AppLayout>
  );
};

export default index;
