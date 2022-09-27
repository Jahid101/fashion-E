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
  const [data, setData]: any = useState([]);
  const [loading, setLoading]: any = useState(true);
  const [pageLoad, setPageLoad]: any = useState(true);
  const [rng, setRng]: any = useState(Math.random);

  useEffect(() => {
    if (router.isReady) {
      getData(id);
      getData2();
    } else {
      return;
    }
  }, [router.isReady, rng]);

  const getData = (id: any) => {
    setPageLoad(true);

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

  const getData2 = () => {
    setLoading(true);

    DataActions.getData(
      3,
      (success: any) => {
        console.log("success=>", success);
        setLoading(false);
        setData(success);
      },
      (error: any) => {
        console.log("error=>", error);
      }
    );
  };

  if (pageLoad || loading) {
    return <Loader></Loader>;
  }

  return (
    <AppLayout>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <ProductById data={oneData} data2={data} setRng={setRng} getData={getData}></ProductById>
      <FastDelivery></FastDelivery>
      <PopularProduct></PopularProduct>
      <Footer></Footer>
    </AppLayout>
  );
};

export default index;
