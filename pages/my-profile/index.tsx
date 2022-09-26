import MenuComponent from "@Components/MenuComponent";
import MobileDrawer from "@Components/MobileDrawer";
import MyProfile from "@Components/MyProfile";
import Profile from "@Components/Profile";
import ProfileSettings from "@Components/ProfileSettings";
import AppLayout from "@layout/layout";
import { Col, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
require("./index.less");

const index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <AppLayout>
      <Layout className="not-collapsed">
        <MenuComponent defaultSelectedKeys={"7"} />
        <Layout className="site-layout">
          <Header className="headerTop">
            <Row className="height-100">
              <Col span={3} className="hamBtn">
                <AiOutlineMenu
                  className="forMobile"
                  onClick={() => {
                    setVisible(true);
                  }}
                />
              </Col>

              <MobileDrawer
                visible={visible}
                setVisible={setVisible}
                defaultSelectedKeys={"7"}
              ></MobileDrawer>

              <Col span={21} className="text-right">
                <MyProfile></MyProfile>
              </Col>
            </Row>
          </Header>

          <Content className="uniPadding">
            <Profile></Profile>
            <ProfileSettings></ProfileSettings>
          </Content>
        </Layout>
      </Layout>
    </AppLayout>
  );
};

export default index;
