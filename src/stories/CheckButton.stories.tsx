import type { Meta, StoryObj } from "@storybook/react";
import CheckButton from "../components/CheckButton";

const meta = {
  title: "Button/CheckButton",
  component: CheckButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ width: "50px", height: "80px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
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
} satisfies Meta<typeof CheckButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "선택지1",
    isChecked: false,
    onClick: () => {},
  },
};
