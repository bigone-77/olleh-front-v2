import type { Meta, StoryObj } from "@storybook/react";
import WideCheckButtonList from "../components/WideCheckButtonList";

const meta = {
  title: "List/WideCheckButtonList",
  component: WideCheckButtonList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ width: "384px", height: "200px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    checkedList: {
      control: "array",
      description: "체크 리스트",
      defaultValue: [
        "기본 설정(앱 설치, 환경설정 등)",
        "기본 활용(카메라, 갤러리 등)",
        "실생활 활용(카카오톡, 모바일 주문, 배달 앱 등)",
      ],
    },
    onCheckedClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof WideCheckButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checkedList: [
      "기본 설정(앱 설치, 환경설정 등)",
      "기본 활용(카메라, 갤러리 등)",
      "실생활 활용(카카오톡, 모바일 주문, 배달 앱 등)",
    ],
    onCheckedClick: () => {},
  },
};
