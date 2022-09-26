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
      {/* <div className="navbarDiv"> */}
        <Navbar></Navbar>
      {/* </div> */}
      <Profile></Profile>
      <ProfileSettings></ProfileSettings>
    </AppLayout>
  );
};

export default index;
