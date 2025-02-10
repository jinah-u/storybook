import { Meta, StoryFn } from "@storybook/react";
import EventUIconBtn from "./EventUIconBtn";
import { Add } from "@mui/icons-material";

export default {
  title: "Components/EventUIconBtn",
  component: EventUIconBtn,
  argTypes: {
    outline: {
      control: "boolean",
      description: "Whether the button has an outline style",
      defaultValue: false,
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "inherit"],
      description: "Color of the button",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the button",
    },
    onClick: { action: "clicked", description: "Click event handler" },
  },
} as Meta<typeof EventUIconBtn>;

const Template: StoryFn<typeof EventUIconBtn> = (args) => (
  <EventUIconBtn {...args}>
    <Add />
  </EventUIconBtn>
);

export const Default = Template.bind({});
Default.args = {
  outline: false,
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  outline: false,
  color: "primary",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  outline: false,
  color: "secondary",
};
