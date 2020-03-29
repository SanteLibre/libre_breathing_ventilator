const primary =  '#4B649D';
const success =  '#3CAF28';
const info =  '#0087D1';
const warning =  '#EDE217';
const danger =  '#D13B2E';

export const DARK_THEME = {
  name: 'dark',
  base: 'dark',
  variables: {
    primary,
    success,
    info,
    warning,
    danger,
    charts: {
      primary,
      success,
      info,
      warning,
      danger,
      bg: 'transparent',
      textColor: '#FFFFFF',
      axisLineColor: '#8F9BB3',
      splitLineColor: '#2E3A59',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#101426',
      areaOpacity: '0.7',
    },
    bubbleMap: {
      primary,
      success,
      info,
      warning,
      danger,
      titleColor: '#FFFFFF',
      areaColor: '#2E3A59',
      areaHoverColor: '#8F9BB3',
      areaBorderColor: '#1A2138',
    },
  },
};
