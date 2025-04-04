import { Menu } from "antd";
import { Link } from "react-router-dom";

function LeftBar({ sidebarItems, setSelectedSection }) {
  const menuItems = sidebarItems.map((item) => ({
    key: item.key,
    label: item.label,
    icon: item.icon,
    onClick: () => setSelectedSection(item.label),
  }));

  return (
    <div>
      <div className="flex w-full">
        <Link to="/">
          <img
            className="w-72 h-28"
            src="https://www.relate.org.uk/sites/default/files/inline-images/bwc_logo_v5.png"
            alt=""
          />
        </Link>
      </div>

      <Menu
        style={{
          width: "100%",
          textAlign: "left",
          height: "calc(100vh - 112px)",
        }}
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </div>
  );
}

export default LeftBar;
