import {
  Button,
  Checkbox,
  Collapse,
  Divider,
  Dropdown,
  Input,
} from "antd";
import {
  SearchOutlined,
  InfoCircleOutlined,
  DownOutlined,
  UpOutlined,
  TagOutlined,
  UserDeleteOutlined,
  UserAddOutlined,
  RedEnvelopeOutlined,
} from "@ant-design/icons";

import { useState } from "react";

const itemStyle: React.CSSProperties = {
  borderBottom: "1px solid #E5E5E5",
  padding: "25px 15px",
};

const activeItemStyle: React.CSSProperties = {
  borderBottom: "1px solid #E5E5E5",
  padding: "25px 15px",
  color: "#1D4ED8",
  backgroundColor: "#EDF2FF",
};

export default function CandidateList() {
  const [isOpportunityMenuOpen, setIsOpportunityMenuOpen] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<number>(3);

  function getItem(key: number, label: string, count: number) {
    return {
      label: (
        <div className="flex items-center justify-between font-semibold">
          <div>{label}</div>
          <div
            className={
              "rounded-2xl px-3 " +
              (activeKey === key ? "bg-[#D1DDFF]" : "bg-gray-100")
            }
          >
            {count}
          </div>
        </div>
      ),
      style: activeKey === key ? activeItemStyle : itemStyle,
      key: key + "",
    };
  }
  return (
    <>
      <div className="overflow-auto overflow-x-hidden flex flex-col gap-8 px-6 py-5 lg:w-[400px]">
        <div>
          <h1 className="text-[#1D4ED8] font-bold text-xl mb-2">
            London Internship Program
          </h1>
          <div>London</div>
        </div>
        <div>
          <Input
            size="large"
            placeholder="Search by name, edu, exp, or #tag"
            prefix={
              <SearchOutlined style={{ color: "#888", marginRight: 5 }} />
            }
            suffix={
              <InfoCircleOutlined style={{ color: "#888", marginLeft: 5 }} />
            }
          />
        </div>
        <div>
          <Collapse
            style={{ backgroundColor: "white" }}
            bordered={false}
            expandIconPosition="right"
            items={filters as any}
          />
        </div>
      </div>

      <div className="overflow-auto overflow-x-hidden grow flex flex-col gap-10 pr-10 py-5 text-[#1D4ED8]">
        <div className="flex justify-between items-center">
          <Dropdown
            menu={{
              items: items.map((item: any, i: number) =>
                getItem(i, item.label, item.count)
              ),
              style: {
                padding: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              onSelect: (info) => {
                setActiveKey(parseInt(info.key));
                setIsOpportunityMenuOpen(false);
              },
              selectable: true,
            }}
            placement="bottom"
            trigger={["click"]}
            onOpenChange={(open) => setIsOpportunityMenuOpen(open)}
            className="grow"
          >
            <div
              className={
                "bg-white rounded-2xl shadow-sm flex justify-between max-w-xs p-2 px-4 font-semibold items-center hover:cursor-pointer " +
                (isOpportunityMenuOpen && "rounded-b-sm")
              }
            >
              <div>{items[activeKey].label}</div>
              {isOpportunityMenuOpen ? (
                <UpOutlined style={{ fontSize: "12px" }} />
              ) : (
                <DownOutlined style={{ fontSize: "12px" }} />
              )}
            </div>
          </Dropdown>

          <div className="flex items-center">
            <div className="flex items-center gap-2">
              {[
                <TagOutlined />,
                <UserDeleteOutlined />,
                <UserAddOutlined />,
                <UserAddOutlined />,
                <RedEnvelopeOutlined />,
              ].map((icon) => (
                <Button
                  icon={icon}
                  style={{ border: 0, backgroundColor: "white" }}
                  className="shadow"
                ></Button>
              ))}
            </div>
            <Divider type="vertical" />
            <div className="text-white bg-[#1D4ED8] flex text-xs rounded-lg">
              <div className="p-2 px-3 border-r">Move to Video Interview I</div>
              <div className="p-2">
                <DownOutlined />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg bg-white p-5">
          <div className="flex justify-between items-center">
            <Checkbox>
              <div className="pl-4 text-md font-semibold text-[#1D4ED8]">
                247 Candidate
              </div>
            </Checkbox>
            <div>
              <Button type="text" className="font-semibold text-[#1D4ED8] ">
                Qualifed
              </Button>

              <Divider type="vertical" />

              <Button type="text">
                <div className="flex items-center gap-2 font-semibold">
                  <div>Task</div>
                  <div className="rounded-full w-5 h-5 text-[0.6rem] flex items-center justify-center bg-[#F7F8FD] text-[#22216B]">
                    25
                  </div>
                </div>
              </Button>

              <Divider type="vertical" />
              <Button type="text">
                <div className="flex items-center gap-2 font-semibold">
                  <div>Task</div>
                  <div className="rounded-full w-5 h-5 text-[0.6rem] flex items-center justify-center bg-[#F7F8FD] text-[#22216B]">
                    78
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <Divider />
          <div>
            {candidates.map((candidate) => (
              <>
                <Candidate data={candidate} key={candidate.id} />
                <Divider />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Candidate({ data }: any) {
  return (
    <div className="flex items-center gap-6">
      <Checkbox />
      <div className="w-14 h-14 flex items-center justify-center bg-[#EDF4FF] text-[#D0E1FF] rounded-full font-bold">
        AS
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-bold ">{data.name}</h1>

        <div className="text-sm font-semibold">
          {data.city}, {data.country}
        </div>

        <div className="text-sm">{data.degree}</div>

        <div className="flex items-center gap-4 flex-wrap text-xs font-semibold ">
          {data.tags.map((tag: string, i: number) => (
            <div className="text-[#1D4ED8]" key={tag + i}>
              #{tag}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-wrap text-xs font-semibold">
          {data.keywords.map((keyword: string, i: number) => (
            <div
              className="px-3 py-1 bg-[#F3FAFC] text-[#037092] rounded-xl"
              key={keyword + i}
            >
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const candidates = [
  {
    id: "1",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "4",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "-5",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "5",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "6",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "7",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "8",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "19",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "11",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "12",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
  {
    id: "48",
    name: "Aaliyah Sanderson",
    city: "Riyadh",
    country: "Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["top_candidate", "top_candidate"],
    keywords: ["New York", "Marketing", "London"],
  },
];

const items = [
  {
    label: "Applied",
    count: 1745,
  },
  {
    label: "Shortlisted",
    count: 453,
  },
  {
    label: "Technical Interview",
    count: 123,
  },
  {
    label: "Opportunity Browsing",
    count: 243,
  },
  {
    label: "Video Interview I",
    count: 25,
  },
  {
    label: "Video Interview II",
    count: 25,
  },
  {
    label: "Video Interview III",
    count: 25,
  },
  {
    label: "Offer",
    count: 25,
  },
  {
    label: "Withdrawn",
    count: 25,
  },
];

const filters = [
  {
    key: "1",
    label: <div className="font-bold py-2">Filters</div>,
    children: <div>"test"</div>,
    showArrow: false,
    extra: <div className="py-2">0 Selected</div>,
    collapsible: "icon",
  },
  {
    key: "2",
    label: <div className="font-semibold">Personal Information</div>,
    children: <div>text</div>,
  },
  {
    key: "3",
    label: "Education",
    children: <div>text</div>,
  },
  {
    key: "4",
    label: "Work Experience",
    children: <div>text</div>,
  },
  {
    key: "5",
    label: "Activity Filter",
    children: <div>text</div>,
  },
  {
    key: "6",
    label: "Advanced Filter",
    children: <div>text</div>,
  },
];
