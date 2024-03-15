import type { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Button/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    Story => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "dark",
    },
    disabled: {
      type: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: false,
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "icon",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Button",
    disabled: false,
    theme: "light",
    onClick: () => {},
  },
};

export const Dark: Story = {
  args: {
    children: "Button",
    disabled: false,
    theme: "dark",
    onClick: () => {},
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    disabled: false,
    theme: "social",
    onClick: () => {},
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    disabled: false,
    theme: "text",
    onClick: () => {},
  },
};
