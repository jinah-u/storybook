declare namespace Button {
  type EventUButtonType =
    | 'primaryFilled'
    | 'primaryFilled2'
    | 'primaryOutline'
    | 'secondaryFilled'
    | 'secondaryOutlineBrand50'
    | 'secondaryOutlineBlack90'
    | 'secondaryOutlineGray'
    | 'secondaryRoundSqure';
  interface BtnProps {
    height: string;
    borderRadius: string;
    padding: string;
    color: keyof EventUColors;
    variant: 'contained' | 'outlined' | 'text';
    disabled: {
      color: keyof EventUColors;
      backgroundColor?: keyof EventUColors;
    };
    fontSize?: string;
    fontWeight?: number;
    width?: string;
    gap?: string;
  }
  type EventUBtnStyleRecord = Record<EventUButtonType, BtnProps>;
}
