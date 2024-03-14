import type { Meta, StoryObj } from "@storybook/react";
import WideCheckButton from "../components/WideCheckButton";

const meta = {
  title: "Button/WideCheckButton",
  component: WideCheckButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ width: "384px", height: "49px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 레이블",
      defaultValue: "선택지1",
    },
    isChecked: {
      control: "boolean",
      description: "버튼의 선택된지 유무",
      defaultValue: "false",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof WideCheckButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "기본 설정(앱 설치, 환경설정 등)",
    isChecked: false,
    onClick: () => {},
  },
};
