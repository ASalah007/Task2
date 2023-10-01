import { ConfigProvider, Menu } from "antd";
import {
  HomeOutlined,
  RightOutlined,
  LeftOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  BookOutlined,
  HeartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Layout } from "antd";

export default function SideNav() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            collapsedWidth: 65,
            itemSelectedBg: "#E9EFFF",
            itemSelectedColor: "#1D4ED8",
            itemMarginInline: 8,
            itemMarginBlock: 12,
          },
        },
      }}
    >
      <Layout>
        <Layout.Sider collapsed={collapsed} theme="light" collapsedWidth={65}>
          <div className="flex flex-col justify-between grow h-screen">
            <Menu
              inlineCollapsed={collapsed}
              mode="inline"
              style={{ border: 0 }}
              onSelect={(info) =>
                info.key !== "expand" && setSelectedKeys([info.key])
              }
              selectedKeys={selectedKeys}
            >
              <Menu.Item icon={<HomeOutlined />}>some Text</Menu.Item>
              <Menu.Item icon={<UsergroupAddOutlined />}>some Text</Menu.Item>
              <Menu.Item icon={<CalendarOutlined />}>some Text</Menu.Item>
              <Menu.Item icon={<ShareAltOutlined />}>some Text</Menu.Item>
              <Menu.Item icon={<FileTextOutlined />}>some Text</Menu.Item>
              <Menu.Item icon={<BookOutlined />}>some Text</Menu.Item>
              <Menu.Item icon={<HeartOutlined />}>some Text</Menu.Item>
              <Menu.Item
                key="expand"
                icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              >
                some Text
              </Menu.Item>
            </Menu>

            <Menu
              inlineCollapsed={collapsed}
              mode="inline"
              style={{ border: 0 }}
              selectedKeys={selectedKeys}
              onSelect={(info) => setSelectedKeys([info.key])}
            >
              <Menu.Item key="settings" icon={<SettingOutlined />}>
                some Text
              </Menu.Item>
              <Menu.Item key="profile" icon={<HomeOutlined />}>
                some Text
              </Menu.Item>
            </Menu>
          </div>
        </Layout.Sider>
      </Layout>
    </ConfigProvider>
  );
}
