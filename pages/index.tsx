
import Footer from "@Components/Footer";
import Navbar from "@Components/Navbar";
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
      <Footer></Footer>
    </AppLayout>
  );
};

export default index;
