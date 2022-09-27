import {
  Button,
  Checkbox,
  Col,
  Divider,
  message,
  Rate,
  Row,
  Select,
} from "antd";
import router from "next/router";
import React, { useState } from "react";
require("./index.less");

const { Option } = Select;

const index = (props: any) => {
  const [clr, setClr] = useState(false);
  console.log("props", props);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className="section-container">
      <div className="productById">
        {/* Left Site */}
        <div className=" mr-20">
          <div className="imgDiv">
            <img
              src={props?.data?.image}
              alt="Product"
              className="productByIdImg"
            />
          </div>

          <div className="flexSmImg">
            {props.data2 &&
              props.data2.map((item: any, index: any) => {
                return (
                  <div>
                    <img
                      src={item.image}
                      alt="product"
                      className="smallProductImg cursor"
                      onClick={() => {
                        router.push(`/product/${item.id}`);
                        // props.setRng(Math.random);
                        props.getData(item.id);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {/* Right Site */}
        <div>
          <div className={clr ? "pTitle2" : "pTitle"}>{props?.data?.title}</div>
          <div className="pTitle">
            <span className="newPrice">${props?.data?.price}</span>{" "}
            <span className="oldPrice">${props?.data?.price}</span>
          </div>
          <div className="ratingDiv">
            <Rate disabled value={props?.data?.rating?.rate} />
          </div>

          <div className="dividerPId">
            <Divider></Divider>
          </div>

          <div className="flexColor">
            <div className="text-18 weight-600">Colors</div>
            <div
              className={"clr1 cursor"}
              onMouseOver={() => {
                setClr(true);
              }}
              onMouseOut={() => {
                setClr(false);
              }}
            ></div>
            <div className="clr2 cursor"></div>
            <div className="clr3 cursor"></div>
          </div>

          <div className="flex">
            <div>
              <Select
                className="sizeSelect"
                showSearch
                placeholder="Size"
                size="large"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                <Option value="XXL">XXL</Option>
                <Option value="XL">XL</Option>
                <Option value="L">L</Option>
                <Option value="M">M</Option>
                <Option value="S">S</Option>
              </Select>
            </div>

            <div className="ml-20">
              <Select
                className="sizeSelect"
                showSearch
                placeholder="QTY"
                size="large"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </div>
          </div>

          <div className="primary-color mt-35 mb-35">
            Only {props?.data?.rating?.count} Left In Stock
          </div>

          <div className="flex">
            <Button
              // @ts-ignore
              type="secondary"
              style={{ background: "#bdbdbd9c" }}
              className=" btnText"
              onClick={() => {
                message.warn("Coming soon");
              }}
            >
              Add To Cart
            </Button>

            <Button
              type="primary"
              className="ml-20 btnText"
              onClick={() => {
                message.warn("Coming soon");
              }}
            >
              Buy Now
            </Button>
          </div>

          <div className="dividerPId">
            <Divider></Divider>
          </div>

          <div className="flex mb-30">
            <div>
              <img
                className="cursor"
                src="/images/love.svg"
                alt=""
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />{" "}
              <span
                className="ml-10 subText cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              >
                Add To Wishlist
              </span>
            </div>
            <div className="ml-30">
              <img
                className="cursor"
                src="/images/compare.svg"
                alt=""
                onClick={() => {
                  message.warn("Coming soon");
                }}
              />
              <span
                className="ml-10 subText cursor"
                onClick={() => {
                  message.warn("Coming soon");
                }}
              >
                Compare
              </span>
            </div>
          </div>

          <div className="mb-30 weight-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less page when looking
            at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less
          </div>

          <div>
            <Checkbox onChange={() => {}}>
              <span className="weight-500">
                Lorem Ipsum is simply dummy text.
              </span>
            </Checkbox>
          </div>
          <div>
            <Checkbox onChange={() => {}}>
              <span className="weight-500">
                Lorem Ipsum is simply dummy text.
              </span>
            </Checkbox>
          </div>

          {/* <div className="flex">
            {props.data2 &&
              props.data2.map((item: any, index: any) => {
                return (
                  <div>
                    <img
                      src={item.image}
                      alt="product"
                      className="smallProductImg"
                      onClick={() => {
                        router.push(`/product/${item.id}`);
                      }}
                    />
                  </div>
                );
              })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default index;
