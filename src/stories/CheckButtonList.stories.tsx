import type { Meta, StoryObj } from "@storybook/react";
import CheckButtonList from "../components/CheckButtonList";

const meta = {
  title: "List/CheckButtonList",
  component: CheckButtonList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ width: "362px", height: "80px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    checkedList: {
      control: "array",
      description: "체크 리스트",
      defaultValue: ["30대", "40대", "50대", "60대", "70대", "상관없음"],
    },
    onCheckedClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof CheckButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checkedList: ["30대", "40대", "50대", "60대", "70대", "상관없음"],
    onCheckedClick: () => {},
  },
};
