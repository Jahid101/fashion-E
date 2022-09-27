import React, { useEffect, useState } from "react";
import DataActions from "redux/actions/DataActions";
require("./index.less");

const index = () => {
  const [loading, setLoading] = useState(false);
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
    <div>
      <div></div>
      <div className="mt-15">
        {data?.map((item: any, index: any) => {
          return (
            <div key={index}>
              <span
                style={item.id % 2 == 0 ? { color: "red" } : { color: "green" }}
              >
                {item.id}
              </span>{" "}
              - Category: {item?.category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
