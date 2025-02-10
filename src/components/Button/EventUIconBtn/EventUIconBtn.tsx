import { IconButton, IconButtonProps, styled } from '@mui/material';
import { eventUColor } from 'constants/colors';
import { PropsWithChildren } from 'react';

interface BasicIconBtnProps extends IconButtonProps {
  outline?: boolean;
}
const BasicIconBtn = styled(IconButton)(({ theme }) => ({
  minWidth: 'none',
  padding: 0,
}));
const BaseOutlineIconBtn = styled(BasicIconBtn)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '10px',
  border: `1px solid ${eventUColor.black10}`,
  ':hover': {
    backgroundColor: 'transparent',
  },
  ':active': {
    backgroundColor: theme.palette.black2.main,
  },
}));

const EventUIconBtn = ({
  children,
  outline = false,
  ...props
}: PropsWithChildren<BasicIconBtnProps>) => {
  return outline ? (
    <BaseOutlineIconBtn {...props}>{children}</BaseOutlineIconBtn>
  ) : (
    <BasicIconBtn {...props}>{children}</BasicIconBtn>
  );
};
export default EventUIconBtn;
