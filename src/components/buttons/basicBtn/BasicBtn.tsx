import { Button, ButtonProps, styled } from "@mui/material";
import { eventUColor, EventUColors } from "constants/colors";
import { PropsWithChildren } from "react";

export type EventUButtonType =
  | "primaryFilled"
  | "primaryFilled2"
  | "primaryOutline"
  | "secondaryFilled"
  | "secondaryOutlineBrand50"
  | "secondaryOutlineBlack90"
  | "secondaryOutlineBlack30"
  | "secondaryOutlineGray"
  | "secondaryRoundSqure"
  | "text";
interface BtnProps {
  height: string;
  borderRadius: string;
  padding: string;
  color: keyof EventUColors;
  variant: "contained" | "outlined" | "text";
  disabled: {
    color: string;
    backgroundColor?: string;
  };
  active?: {
    backgroundColor?: string;
  };
  fontSize?: string;
  fontWeight?: number;
  width?: string;
  gap?: string;
}
type EventUBtnStyleRecord = Record<EventUButtonType, BtnProps>;
const eventUBtnStyles: EventUBtnStyleRecord = {
  primaryFilled: {
    fontSize: "16px",
    fontWeight: 700,
    height: "56px",
    borderRadius: "12px",
    padding: "0 12px",
    color: "brand50",
    variant: "contained",
    disabled: {
      color: "white",
      backgroundColor: eventUColor.black10,
    },
    active: {
      backgroundColor: eventUColor.brand70,
    },
    gap: "4px",
  },
  primaryFilled2: {
    fontSize: "16px",
    fontWeight: 700,
    height: "56px",
    borderRadius: "12px",
    padding: "0 12px",
    color: "brand20",
    variant: "contained",
    disabled: {
      color: "white",
      backgroundColor: eventUColor.black10,
    },
    active: {
      backgroundColor: eventUColor.brand40,
    },
    gap: "4px",
  },
  primaryOutline: {
    fontSize: "16px",
    fontWeight: 700,
    height: "56px",
    borderRadius: "12px",
    padding: "0 12px",
    color: "brand50",
    variant: "outlined",
    disabled: {
      color: eventUColor.black30,
    },
    gap: "4px",
  },

  secondaryOutlineBrand50: {
    fontSize: "12px",
    fontWeight: 400,
    height: "30px",
    borderRadius: "40px",
    padding: "0 12px",
    color: "brand50",
    variant: "outlined",
    disabled: {
      color: eventUColor.black10,
      backgroundColor: eventUColor.white,
    },
    gap: "4px",
  },
  secondaryOutlineBlack90: {
    fontSize: "14px",
    fontWeight: 500,
    height: "38px",
    borderRadius: "40px",
    padding: "0 16px",
    color: "black90",
    variant: "outlined",
    disabled: {
      color: eventUColor.black10,
      backgroundColor: eventUColor.white,
    },
    gap: "6px",
  },
  secondaryOutlineBlack30: {
    fontSize: "14px",
    fontWeight: 500,
    height: "38px",
    borderRadius: "40px",
    padding: "0 16px",
    color: "black30",
    variant: "outlined",
    disabled: {
      color: eventUColor.black10,
      backgroundColor: eventUColor.white,
    },
    gap: "6px",
  },
  secondaryOutlineGray: {
    fontSize: "12px",
    fontWeight: 400,
    height: "30px",
    borderRadius: "40px",
    padding: "0 12px",
    color: "black90",
    variant: "outlined",
    disabled: {
      color: eventUColor.black10,
      backgroundColor: eventUColor.white,
    },
    gap: "4px",
  },
  secondaryFilled: {
    fontSize: "12px",
    fontWeight: 400,
    height: "30px",
    padding: "0 16px",
    borderRadius: "12px",
    color: "brand5",
    variant: "contained",
    disabled: {
      color: eventUColor.black30,
      backgroundColor: eventUColor.black10,
    },
    active: {
      backgroundColor: eventUColor.brand20,
    },
  },
  secondaryRoundSqure: {
    width: "100px",
    height: "100px",
    padding: "0px 8px",
    borderRadius: "20px",
    color: "brand5",
    variant: "contained",
    disabled: {
      color: eventUColor.black30,
      backgroundColor: eventUColor.black30,
    },
  },
  text: {
    fontSize: "12px",
    fontWeight: 400,
    color: "black50",
    variant: "text",
    padding: "0",
    height: "fit-content",
    borderRadius: "0",
    disabled: {
      color: eventUColor.black30,
    },
  },
};
export const BasicBtn = styled(Button)<EventUBtnProps>(({ buttontype }) => ({
  fontSize: eventUBtnStyles[buttontype].fontSize,
  fontWeight: eventUBtnStyles[buttontype].fontWeight,
  fontFamily: "Noto Sans KR",
  height: eventUBtnStyles[buttontype].height,
  borderRadius: eventUBtnStyles[buttontype].borderRadius,
  padding: eventUBtnStyles[buttontype].padding,
  ...(eventUBtnStyles[buttontype].width && {
    width: eventUBtnStyles[buttontype].width,
  }),
  ...(eventUBtnStyles[buttontype].gap && {
    gap: eventUBtnStyles[buttontype].gap,
  }),
  ...(eventUBtnStyles[buttontype]?.active?.backgroundColor && {
    ":hover": {
      backgroundColor: eventUColor[eventUBtnStyles[buttontype].color],
    },
    ":active": {
      backgroundColor: eventUBtnStyles[buttontype].active.backgroundColor,
    },
  }),
  ":disabled": {
    color: eventUBtnStyles[buttontype].disabled.color,
    backgroundColor: eventUBtnStyles[buttontype].disabled.backgroundColor,
  },
}));
interface EventUBtnProps extends ButtonProps {
  buttontype: EventUButtonType;
}
const EventUBtn = ({
  children,
  buttontype = "primaryFilled",
  ...props
}: PropsWithChildren<EventUBtnProps>) => (
  <BasicBtn
    buttontype={buttontype}
    variant={eventUBtnStyles[buttontype].variant}
    color={eventUBtnStyles[buttontype].color}
    {...props}
  >
    {children}
  </BasicBtn>
);

export default EventUBtn;
