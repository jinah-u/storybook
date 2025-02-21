import { createTheme } from '@mui/material';
import { COLORS, TRANSPARENT } from 'constants/theme';
import { ColorKey } from 'types/theme';
/* mui theme style argumentation */
declare module '@mui/material/styles' {
  /* Palette argumentation */
  interface Palette {
    WHITE: Palette['primary'];
    BLACK_100: Palette['primary'];
    BLACK_90: Palette['primary'];
    BLACK_80: Palette['primary'];
    BLACK_70: Palette['primary'];
    BLACK_60: Palette['primary'];
    BLACK_50: Palette['primary'];
    BLACK_40: Palette['primary'];
    BLACK_30: Palette['primary'];
    BLACK_20: Palette['primary'];
    BLACK_10: Palette['primary'];
    BLACK_8: Palette['primary'];
    BLACK_6: Palette['primary'];
    BLACK_4: Palette['primary'];
    BLACK_2: Palette['primary'];
    RED: Palette['primary'];
    GREEN: Palette['primary'];
    BLUE: Palette['primary'];
    BRAND_5: Palette['primary'];
    BRAND_20: Palette['primary'];
    BRAND_40: Palette['primary'];
    BRAND_50: Palette['primary'];
    BRAND_70: Palette['primary'];
    BRAND_BLUE: Palette['primary'];
    BRAND_YELLOW: Palette['primary'];
    PROGRESS_BAR: Palette['primary'];
  }
  /* color setup, PaletteOptions argumentation */
  interface PaletteOptions {
    WHITE?: PaletteOptions['primary'];
    BLACK_100?: PaletteOptions['primary'];
    BLACK_90?: PaletteOptions['primary'];
    BLACK_80?: PaletteOptions['primary'];
    BLACK_70?: PaletteOptions['primary'];
    BLACK_60?: PaletteOptions['primary'];
    BLACK_50?: PaletteOptions['primary'];
    BLACK_40?: PaletteOptions['primary'];
    BLACK_30?: PaletteOptions['primary'];
    BLACK_20?: PaletteOptions['primary'];
    BLACK_10?: PaletteOptions['primary'];
    BLACK_8?: PaletteOptions['primary'];
    BLACK_6?: PaletteOptions['primary'];
    BLACK_4?: PaletteOptions['primary'];
    BLACK_2?: PaletteOptions['primary'];
    RED?: PaletteOptions['primary'];
    GREEN?: PaletteOptions['primary'];
    BLUE?: PaletteOptions['primary'];
    BRAND_5?: PaletteOptions['primary'];
    BRAND_20?: PaletteOptions['primary'];
    BRAND_40?: PaletteOptions['primary'];
    BRAND_50?: PaletteOptions['primary'];
    BRAND_70?: PaletteOptions['primary'];
    BRAND_BLUE?: PaletteOptions['primary'];
    BRAND_YELLOW?: PaletteOptions['primary'];
    PROGRESS_BAR?: PaletteOptions['primary'];
  }
  /* TypographyVariants argumentation */
  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading2B: React.CSSProperties;
    heading3: React.CSSProperties;
    heading3B: React.CSSProperties;
    subHeading: React.CSSProperties;
    subHeadingB: React.CSSProperties;
    body1: React.CSSProperties;
    body1B: React.CSSProperties;
    body1M: React.CSSProperties;
    body2: React.CSSProperties;
    body2B: React.CSSProperties;
    body2M: React.CSSProperties;
    body3: React.CSSProperties;
    body3B: React.CSSProperties;
    body3M: React.CSSProperties;
    description: React.CSSProperties;
    descriptionB: React.CSSProperties;
    number1: React.CSSProperties;
    number1B: React.CSSProperties;
    number2: React.CSSProperties;
    number2B: React.CSSProperties;
    number3: React.CSSProperties;
    number3B: React.CSSProperties;
    number3ST: React.CSSProperties;
    number4: React.CSSProperties;
    number4B: React.CSSProperties;
    number4ST: React.CSSProperties;
    number5: React.CSSProperties;
    number5B: React.CSSProperties;
    number5ST: React.CSSProperties;
    number6: React.CSSProperties;
  }
  /*
   *  TypographyVariantsOptions argumentation
   */
  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading2B?: React.CSSProperties;
    heading3?: React.CSSProperties;
    heading3B?: React.CSSProperties;
    subHeading?: React.CSSProperties;
    subHeadingB?: React.CSSProperties;
    body1?: React.CSSProperties;
    body1M?: React.CSSProperties;
    body1B?: React.CSSProperties;
    body2?: React.CSSProperties;
    body2B?: React.CSSProperties;
    body2M?: React.CSSProperties;
    body3?: React.CSSProperties;
    body3B?: React.CSSProperties;
    body3M?: React.CSSProperties;
    description?: React.CSSProperties;
    descriptionB?: React.CSSProperties;
    number1?: React.CSSProperties;
    number1B?: React.CSSProperties;
    number2?: React.CSSProperties;
    number2B?: React.CSSProperties;
    number3?: React.CSSProperties;
    number3B?: React.CSSProperties;
    number3ST?: React.CSSProperties;
    number4?: React.CSSProperties;
    number4B?: React.CSSProperties;
    number4ST?: React.CSSProperties;
    number5?: React.CSSProperties;
    number5B?: React.CSSProperties;
    number5ST?: React.CSSProperties;
    number6?: React.CSSProperties;
  }
  /* BreakpointOverrides argumentation */
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
/*
 * 타이포그래피 설정 typescript
 * typography interface에 추가 (argumentation)
 */
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    heading1: true;
    heading2: true;
    heading2B: true;
    heading3: true;
    heading3B: true;
    subHeading: true;
    subHeadingB: true;
    body1: true;
    body1B: true;
    body1M: true;
    body2: true;
    body2B: true;
    body2M: true;
    body3: true;
    body3B: true;
    body3M: true;
    description: true;
    descriptionB: true;
    number1: true;
    number1B: true;
    number2: true;
    number2B: true;
    number3: true;
    number3B: true;
    number3ST: true;
    number4: true;
    number4B: true;
    number4ST: true;
    number5: true;
    number5B: true;
    number5ST: true;
    number6: true;
  }
}
/* Mui Button 타입 argumentation */
declare module '@mui/material/Button' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ButtonPropsColorOverrides extends Record<ColorKey, true> {}
}
/* Mui Progress argumentation */
declare module '@mui/material/LinearProgress' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface LinearProgressPropsColorOverrides extends Record<ColorKey, true> {}
}

const colorTheme = createTheme({
  // 색상 설정
  palette: {
    WHITE: {
      main: COLORS.WHITE,
      contrastText: COLORS.BLACK_100,
    },
    BLACK_100: {
      main: COLORS.BLACK_100,
      contrastText: COLORS.WHITE,
    },
    BLACK_90: {
      main: COLORS.BLACK_90,
      contrastText: COLORS.WHITE,
    },
    BLACK_80: {
      main: COLORS.BLACK_80,
      contrastText: COLORS.WHITE,
    },
    BLACK_70: {
      main: COLORS.BLACK_70,
      contrastText: COLORS.WHITE,
    },
    BLACK_60: {
      main: COLORS.BLACK_60,
      contrastText: COLORS.WHITE,
    },
    BLACK_50: {
      main: COLORS.BLACK_50,
      contrastText: COLORS.WHITE,
    },
    BLACK_40: {
      main: COLORS.BLACK_40,
      contrastText: COLORS.WHITE,
    },
    BLACK_30: {
      main: COLORS.BLACK_30,
      contrastText: COLORS.BLACK_100,
    },
    BLACK_20: {
      main: COLORS.BLACK_20,
      contrastText: COLORS.BLACK_100,
    },
    BLACK_10: {
      main: COLORS.BLACK_10,
      contrastText: COLORS.BLACK_100,
    },
    BLACK_8: {
      main: COLORS.BLACK_8,
      contrastText: COLORS.BLACK_100,
    },
    BLACK_6: {
      main: COLORS.BLACK_6,
      contrastText: COLORS.BLACK_100,
    },
    BLACK_4: {
      main: COLORS.BLACK_4,
      contrastText: COLORS.BLACK_100,
    },
    BLACK_2: {
      main: COLORS.BLACK_2,
      contrastText: COLORS.BLACK_100,
    },
    RED: {
      main: COLORS.RED_50,
      contrastText: COLORS.WHITE,
    },
    BLUE: {
      main: COLORS.BLUE_50,
      contrastText: COLORS.WHITE,
    },
    GREEN: {
      main: COLORS.GREEN_50,
      contrastText: COLORS.WHITE,
    },
    BRAND_5: {
      main: COLORS.BRAND_5,
      contrastText: COLORS.BRAND_50,
    },
    BRAND_20: {
      main: COLORS.BRAND_20,
      contrastText: COLORS.BRAND_50,
    },
    BRAND_40: {
      main: COLORS.BRAND_40,
      contrastText: COLORS.WHITE,
    },
    BRAND_50: {
      main: COLORS.BRAND_50,
      dark: COLORS.BRAND_70,
      contrastText: COLORS.WHITE,
    },
    BRAND_70: {
      main: COLORS.BRAND_70,
      contrastText: COLORS.WHITE,
    },
    BRAND_BLUE: {
      main: COLORS.BRAND_BLUE,
      contrastText: COLORS.BLACK_100,
    },
    BRAND_YELLOW: {
      main: COLORS.BRAND_YELLOW,
      contrastText: COLORS.BLACK_100,
    },
    PROGRESS_BAR: {
      main: COLORS.PROGRESS_BAR,
      contrastText: COLORS.WHITE,
    },
  },
});
const typographyTheme = createTheme({
  components: {
    // 타이포그래피 컴포넌트 설정
    MuiTypography: {
      defaultProps: {
        // variant mapping html tag
        variantMapping: {
          display1: 'h1',
          display2: 'h2',
          heading1: 'h1',
          heading2: 'h2',
          heading2B: 'h2',
          heading3: 'h3',
          heading3B: 'h3',
          subHeading: 'h4',
          subHeadingB: 'h4',
          body1: 'span',
          body1B: 'span',
          body1M: 'span',
          body2: 'span',
          body2B: 'span',
          body2M: 'span',
          body3: 'span',
          body3B: 'span',
          body3M: 'span',
          description: 'p',
          descriptionB: 'p',
          number1: 'span',
          number1B: 'span',
          number2: 'span',
          number2B: 'span',
          number3: 'span',
          number3B: 'span',
          number3ST: 'span',
          number4: 'span',
          number4B: 'span',
          number4ST: 'span',
          number5: 'span',
          number5B: 'span',
          number5ST: 'span',
          number6: 'span',
        },
      },
    },
  },
  // 폰트 설정
  typography: {
    display1: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '40px',
      fontWeight: 700,
    },
    display2: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '32px',
      fontWeight: 700,
    },
    heading1: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '28px',
      fontWeight: 700,
    },
    heading2: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '24px',
      fontWeight: 400,
    },
    heading2B: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '24px',
      fontWeight: 700,
    },
    heading3: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '20px',
      fontWeight: 400,
    },
    heading3B: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '20px',
      fontWeight: 700,
    },
    subHeading: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '18px',
      fontWeight: 400,
    },
    subHeadingB: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '18px',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
    },
    body1B: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '16px',
      fontWeight: 700,
    },
    body1M: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '16px',
      fontWeight: 500,
    },
    body2: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '14px',
      fontWeight: 400,
    },
    body2B: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '14px',
      fontWeight: 700,
    },
    body2M: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
    },
    body3: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
    },
    body3B: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '12px',
      fontWeight: 700,
    },
    body3M: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '12px',
      fontWeight: 500,
    },
    description: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '10px',
      fontWeight: 400,
    },
    descriptionB: {
      fontFamily: 'Noto Sans KR, sans-serif',
      fontSize: '10px',
      fontWeight: 700,
    },
    number1: {
      fontSize: '18px',
      fontWeight: 400,
    },
    number1B: {
      fontSize: '18px',
      fontWeight: 700,
    },
    number2: {
      fontSize: '16px',
      fontWeight: 400,
    },
    number2B: {
      fontSize: '16px',
      fontWeight: 700,
    },
    number3: {
      fontSize: '14px',
      fontWeight: 400,
    },
    number3B: {
      fontSize: '14px',
      fontWeight: 700,
    },
    number3ST: {
      fontSize: '14px',
      fontWeight: 400,
      textDecoration: 'line-through',
    },
    number4: {
      fontSize: '12px',
      fontWeight: 400,
    },
    number4B: {
      fontSize: '12px',
      fontWeight: 700,
    },
    number4ST: {
      fontSize: '12px',
      fontWeight: 400,
      textDecoration: 'line-through',
    },
    number5: {
      fontSize: '10px',
      fontWeight: 400,
    },
    number5B: {
      fontSize: '10px',
      fontWeight: 700,
    },
    number5ST: {
      fontSize: '10px',
      fontWeight: 400,
      textDecoration: 'line-through',
    },
    number6: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: '40px',
    },
  },
});
/*
 * 테마 설정
 * breakpoints: 화면분기점 설정
 * components: 컴포넌트 설정
 */
const Theme = createTheme(colorTheme, typographyTheme, {
  components: {
    // 버튼 컴포넌트 설정
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 'none',
          // 버튼 기본 박스 쉐도우 제거
          boxShadow: 'none',
          // hover 시 박스 쉐도우 제거
          ':hover': { boxShadow: 'none' },
          ':focus': { boxShadow: 'none' },
        },
        disableRipple: true,
        disableTouchRipple: true,
        disableFocusRipple: true,
        disableElevation: true,
      },
    },
    // Divider 컴포넌트 설정
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colorTheme.palette.BLACK_6.main,
          margin: '32px 0',
        },
      },
    },
    // MuiCheckbox: {
    //   defaultProps: {
    //     checkedIcon: <CheckedIcon />,
    //   },
    //   styleOverrides: {
    //     root: {
    //       ':disabled': {
    //         backgroundColor: colorTheme.palette.BLACK_10.main,
    //       },
    //       padding: '10px',
    //     },
    //   },
    // },
    // tooltip 컴포넌트 설정
    MuiTooltip: {
      defaultProps: {
        placement: 'top',
      },
      styleOverrides: {
        tooltip: {
          margin: 0,
          padding: 0,
          background: 'none',
        },
        tooltipPlacementTop: { margin: 0 },
      },
    },
    // popper 컴포넌트 설정
    MuiPopper: {
      styleOverrides: {
        root: {
          MuiTooltip: {
            background: 'yellow',
          },
        },
      },
    },
    // progress 컴포넌트 설정
    MuiLinearProgress: {
      defaultProps: { color: 'BRAND_50' },
      styleOverrides: {
        root: {
          height: '10px',
          borderRadius: '20px',
          backgroundColor: colorTheme.palette.BRAND_5.main,
        },
        bar: { borderRadius: '20px' },
        bar1Determinate: {
          backgroundColor: COLORS.PROGRESS_BAR,
        },
      },
    },
    // radio group 컴포넌트 설정
    // MuiRadio: {
    //   defaultProps: {
    //     color: 'BRAND_50',
    //     checkedIcon: <RadioCheckedIcon />,
    //   },
    // },
    // radio group 컴포넌트 설정
    MuiRadioGroup: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontweight: 400,
        },
      },
    },
    // 카드 컴포넌트 설정
    MuiCard: {
      styleOverrides: {
        defaultProps: { raised: false },
        root: {
          width: '100%',
          minHeight: '280px',
          borderRadius: '20px',
          boxShadow: '0 0 4px 0 rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        },
      },
    },
    // card header 컴포넌트 설정
    MuiCardHeader: {
      styleOverrides: {
        title: {
          ...typographyTheme.typography.subHeadingB,
          color: colorTheme.palette.WHITE.main,
        },
        root: { padding: 0 },
      },
    },
    // card media 컴포넌트 설정
    MuiCardMedia: {
      defaultProps: { component: 'img' },
      styleOverrides: {
        root: {
          borderRadius: '20px',
          minWidth: '280px',
        },
        img: {},
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          width: '100%',
          display: 'grid',
          padding: 0,
          ':last-child': {
            padding: 0,
          },
        },
      },
    },
    // Paper 컴포넌트 설정
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    // snack bar 컴포넌트 설정
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
        autoHideDuration: 3000,
        disableWindowBlurListener: true,
      },
      styleOverrides: {
        root: { textAlign: 'center' },
        anchorOriginBottomCenter: {
          [colorTheme.breakpoints.up('xs')]: {
            left: '50%',
            right: 'auto',
            mozTransform: 'translateX(-50%)',
            webkitTransform: 'translateX(-50%)',
            msTransform: 'translateX(-50%)',
            transform: 'translateX(-50%)',
          },
          borderRadius: '16px',
          width: '320px',
          background: TRANSPARENT.BLACK_ALPHA_80,
          padding: '12px',
          bottom: '20px !important',
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          width: '320px',
          borderRadius: '16px',
          backgroundColor: 'none',
          fontFamily: 'Noto Sans KR, sans-serif',
          fontStyle: 'normal',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '18px',
          padding: 0,
          boxShadow: 'none',
        },
        message: { padding: 0 },
      },
    },
    // chip 컴포넌트 설정
    MuiChip: {
      defaultProps: {
        clickable: false,
      },
      styleOverrides: {
        root: {
          fontSize: '12px',
          fontFamily: 'Noto Sans KR, sans-serif',
          fontweight: 400,
          lineHeight: '18px',
        },
        filld: {
          color: colorTheme.palette.BLACK_70.main,
          background: colorTheme.palette.BLACK_4.main,
          ':disabled': {
            background: colorTheme.palette.BLACK_4.main,
          },
        },
        outlined: {
          color: colorTheme.palette.BLACK_70.main,
          background: COLORS.WHITE,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          [colorTheme.breakpoints.up('xs')]: { padding: 0 },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
        },
        list: {
          padding: 0,
        },
      },
    },
  },
  // 화면분기점 기준
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 430,
      lg: 884,
    },
  },
});
export default Theme;
