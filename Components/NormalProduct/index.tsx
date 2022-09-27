import { Spin } from "antd";
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
    <div className="normalProduct">
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
                <div className="normalProductInnerDiv">
                  <img src={item?.image} alt="product" className="productImg"/>
                </div>
              </div>
            );
          })}
      {/* </div> */}
    </div>
  );
};

export default index;
