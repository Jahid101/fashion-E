import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import DataActions from "redux/actions/DataActions";
require("./index.less");

const index = () => {
  const [loading, setLoading]: any = useState(true);
  const [loading2, setLoading2]: any = useState(true);
  const [data, setData]: any = useState([]);
  const [data2, setData2]: any = useState([]);

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
    DataActions.getData(
      1,
      (success: any) => {
        console.log("success=>", success);
        setLoading2(false);
        setData2(success);
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

      {/* <div className="flex"> */}
        <div className="featuredProduct">
          {/* <div className="normalProductOuterDiv"> */}

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
                  <div className={"featuredProductInnerDiv"}>
                    <img
                      src={item?.image}
                      alt="product"
                      className="productImg"
                    />
                  </div>
                </div>
              );
            })}
          {/* </div> */}
        </div>

        {/* <div className="mt-50">
          {data &&
            data2?.map((item: any, index: any) => {
              return (
                <div key={index} className="">
                  <div className={"featuredProductInnerDiv2"}>
                    <img
                      src={item?.image}
                      alt="product"
                      className="productImg2"
                    />
                  </div>
                </div>
              );
            })}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default index;
