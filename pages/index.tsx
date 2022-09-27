import FastDelivery from "@Components/FastDelivery";
import FeaturedProduct from "@Components/FeaturedProduct";
import Footer from "@Components/Footer";
import HeaderSection from "@Components/HeaderSection";
import Navbar from "@Components/Navbar";
import NormalProduct from "@Components/NormalProduct";
import PopularProduct from "@Components/PopularProduct";
import SignupSection from "@Components/SignupSection";
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
      <HeaderSection></HeaderSection>
      <FastDelivery></FastDelivery>
      <NormalProduct></NormalProduct>
      <PopularProduct></PopularProduct>
      <FeaturedProduct></FeaturedProduct>
      <SignupSection></SignupSection>
      <Footer></Footer>
    </AppLayout>
  );
};

export default index;
