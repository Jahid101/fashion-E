import { Spin } from "antd";
import router from "next/router";
import React, { useEffect, useState } from "react";
import DataActions from "redux/actions/DataActions";
require("./index.less");

const index = () => {
  const [loading, setLoading]: any = useState(true);
  const [data, setData]: any = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    DataActions.getData(
      4,
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

  return (
    <div className="popularProductMargin">
      <div className="text-center">
        <div className="popularProductTitle">Popular Products</div>
        <div className="popularProductSubTitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>

      <div className="popularProduct">
        {/* <div className="normalProductOuterDiv"> */}

        {data.length < 1 && (
          <div className="spinGlobalCss">
            {/* @ts-ignore */}
            <Spin spin={loading} />
          </div>
        )}
        {data &&
          data?.map((item: any, index: any) => {
            return (
              <div key={index} className="">
                <div
                  className="popularProductInnerDiv cursor"
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default index;
