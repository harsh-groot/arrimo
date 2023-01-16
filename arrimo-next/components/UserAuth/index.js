import React from "react";
import { Tabs } from "antd";
import Login from "./Login";
import Register from "./Register";

const UserAuth = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Login`,
      children: <Login />,
    },
    {
      key: "2",
      label: `Register`,
      children: <Register />,
    },
  ];
  return (
    <Tabs className="" defaultActiveKey="1" items={items} onChange={onChange} />
  );
};

export default UserAuth;
