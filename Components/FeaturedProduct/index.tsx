import { Col, Row, Spin } from "antd";
import router from "next/router";
import React, { useEffect, useState } from "react";
import DataActions from "redux/actions/DataActions";
require("./index.less");

const index = () => {
  const [loading, setLoading]: any = useState(true);
  const [loading2, setLoading2]: any = useState(true);
  const [data, setData]: any = useState([]);
  const [oneData, setOneData]: any = useState({});

  useEffect(() => {
    getData();
    getData2();
  }, []);

  const getData = () => {
    DataActions.getData(
      5,
      (success: any) => {
        console.log("success=>", success);
        setLoading(false);
        setData(success);
      },
      (error: any) => {
        console.log("error=>", error);
        setLoading(false);
      }
    );
  };

  const getData2 = () => {
    DataActions.getOneData(
      5,
      (success: any) => {
        console.log("success=>", success);
        setLoading2(false);
        setOneData(success);
      },
      (error: any) => {
        console.log("error=>", error);
        setLoading2(false);
      }
    );
  };

  return (
    <div className="featuredProductMargin">
      <div className="text-center">
        <div className="featuredProductTitle">Featured Products</div>
        <div className="featuredProductSubTitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>

      <div className="flexingIt">
        <div className="featuredProduct">
          {data.length < 1 && (
            <div className="spinGlobalCss">
              {/* @ts-ignore */}
              <Spin spin={loading || loading2} />
            </div>
          )}
          {data &&
            data?.map((item: any, index: any) => {
              return (
                <div key={index} className="">
                  <div
                    className={
                      index == 4
                        ? "hideIt featuredProductInnerDiv cursor"
                        : "featuredProductInnerDiv cursor"
                    }
                    onClick={() => {
                      router.push(`/product/${item.id}`);
                    }}
                  >
                    <img
                      src={item?.image}
                      alt="product"
                      className="productImg cursor"
                    />
                  </div>
                </div>
              );
            })}
        </div>

        <div className="mt-50 oneDiv">
          <div className="">
            <div
              className={"featuredProductInnerDiv2 cursor"}
              onClick={() => {
                router.push(`/product/${oneData?.id}`);
              }}
            >
              <img src={oneData?.image} alt="product" className="productImg2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
