import { Button, Col, Row } from "antd";
import React from "react";
// import { items } from "./LeftBar";

function Navbar({ selectedSection }) {
  // console.log(items);
  return (
    <Row justify={"space-between"} align={"middle"} style={{ height: "100%" }}>
      <Col>{selectedSection}</Col>
      <Col span={4}>
        <Button>Create Employee</Button>
      </Col>
    </Row>
  );
}

export default Navbar;
