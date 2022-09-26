import Navbar from "@Components/Navbar";
import Profile from "@Components/Profile";
import ProfileSettings from "@Components/ProfileSettings";
import AppLayout from "@layout/layout";
import { useState } from "react";
require("./index.less");

const index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <AppLayout>
      <Navbar></Navbar>
      <Profile></Profile>
      <ProfileSettings></ProfileSettings>
    </AppLayout>
  );
};

export default index;
