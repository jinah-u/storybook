import { Meta, StoryFn } from "@storybook/react";
import EventUBtn, { EventUButtonType } from "./BasicBtn";

export default {
  title: "Components/BasicBtn",
  component: EventUBtn,
  argTypes: {
    buttontype: {
      control: "select",
      options: [
        "primaryFilled",
        "primaryFilled2",
        "primaryOutline",
        "secondaryFilled",
        "secondaryOutlineBrand50",
        "secondaryOutlineBlack90",
        "secondaryOutlineBlack30",
        "secondaryOutlineGray",
        "secondaryRoundSqure",
        "text",
      ] as EventUButtonType[],
      description: "Button style type",
      defaultValue: "primaryFilled",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      defaultValue: false,
    },
    onClick: { action: "clicked", description: "Click event handler" },
    children: {
      control: "text",
      description: "Button label",
      defaultValue: "EventU Button",
    },
  },
} as Meta<typeof EventUBtn>;

const Template: StoryFn<typeof EventUBtn> = (args) => <EventUBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttontype: "primaryFilled",
};

export const AllButtonStyles = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
    {["primaryFilled", "primaryFilled2", "primaryOutline"].map((type) => (
      <EventUBtn key={type} buttontype={type as EventUButtonType}>
        {type}
      </EventUBtn>
    ))}
  </div>
);
