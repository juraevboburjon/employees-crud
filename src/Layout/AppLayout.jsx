import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

import Navbar from "../components/Navbar";
import LeftBar from "../components/LeftBar";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import {
  AppstoreOutlined,
  CalendarOutlined,
  HomeOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const headerStyle = {
  textAlign: "center",
  color: "#000",
  height: 100,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
  borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
};
const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 100px)",
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
};
const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};

const sidebarItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    icon: <UserAddOutlined />,
    label: <Link to="/new-employee">Create employees</Link>,
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: "Navigation Two",
  },
  {
    key: "4",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
  },
  {
    key: "5",
    label: "Navigation Three",
    icon: <SettingOutlined />,
  },
  {
    key: "link",
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];

const AppLayout = () => {
  const [selectedSection, setSelectedSection] = useState("Home");

  return (
    <Layout style={layoutStyle}>
      <Sider width="20%" style={siderStyle}>
        <LeftBar
          sidebarItems={sidebarItems}
          setSelectedSection={setSelectedSection}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Navbar selectedSection={selectedSection} />
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
