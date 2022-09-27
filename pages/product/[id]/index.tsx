import FastDelivery from "@Components/FastDelivery";
import Footer from "@Components/Footer";
import Loader from "@Components/Loader";
import Navbar from "@Components/Navbar";
import PopularProduct from "@Components/PopularProduct";
import ProductById from "@Components/ProductById";
import Topbar from "@Components/Topbar";
import AppLayout from "@layout/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataActions from "redux/actions/DataActions";
require("./index.less");

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [oneData, setOneData]: any = useState({});
  const [pageLoad, setPageLoad]: any = useState(true);

  useEffect(() => {
    if (router.isReady) {
      getData(id);
    } else {
      return;
    }
  }, [router.isReady]);

  const getData = (id: any) => {
    DataActions.getOneData(
      id,
      (success: any) => {
        console.log("success=>", success);
        setPageLoad(false);
        setOneData(success);
      },
      (error: any) => {
        console.log("error=>", error);
      }
    );
  };

  if (pageLoad) {
    return <Loader></Loader>;
  }

  return (
    <AppLayout>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <ProductById data={oneData}></ProductById>
      <FastDelivery></FastDelivery>
      <PopularProduct></PopularProduct>
      <Footer></Footer>
    </AppLayout>
  );
};

export default index;
