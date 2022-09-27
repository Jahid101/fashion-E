
import Footer from "@Components/Footer";
import Navbar from "@Components/Navbar";
import NormalProduct from "@Components/NormalProduct";
import PopularProduct from "@Components/PopularProduct";
import Profile from "@Components/Profile";
import ProfileSettings from "@Components/ProfileSettings";
import Topbar from "@Components/Topbar";
import AppLayout from "@layout/layout";
import { useState } from "react";
require("./index.less");

const index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <AppLayout>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <NormalProduct></NormalProduct>
      <PopularProduct></PopularProduct>
      <Footer></Footer>
    </AppLayout>
  );
};

export default index;
