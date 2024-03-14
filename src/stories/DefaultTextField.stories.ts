import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  // title: 스토리북에서 버튼의 경로를 나타냄
  title: "TextFields/DefaultTextField",
  // component: 어떤 컴포넌트를 만들었는지 선언형
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 경로",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 Placeholder",
      defaultValue: "텍스트를 입력해주세요",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메시지",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
    id: {
      control: "text",
      description: "텍스트 필드의 id",
      defaultValue: "",
    },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    onIconClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath:
      "https://res.cloudinary.com/dl31hx4rn/image/upload/v1710373324/abqz2pnd5yqlfjbyzxoh.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    isError: false,
    id: "email",
  },
};
