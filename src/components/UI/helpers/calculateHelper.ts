const doIncreaseCSSValue = (property?: any, val?: any): string | undefined => {
  if (property === undefined) {
    return undefined;
  }
  return `calc(${property} + ${val})`;
};

const doDecreaseCSSValue = (property?: any, val?: any): string | undefined => {
  if (property === undefined) {
    return undefined;
  }
  return `calc(${property} - ${val})`;
};

const doMultiplyCSSValue = (property?: any, val?: any): string | undefined => {
  if (property === undefined) {
    return undefined;
  }
  return `calc(${property} * ${val})`;
};

export const increaseCSSValue = (props: any, propName: string, val: any) => {
  if (props.$style && props.$style[propName] !== undefined) {
    return doIncreaseCSSValue(props.$style[propName], val);
  }
  return doIncreaseCSSValue(props.$defaultCustomStyle[propName], val);
};

export const decreaseCSSValue = (props: any, propName: string, val: any) => {
  if (props.$style && props.$style[propName] !== undefined) {
    return doDecreaseCSSValue(props.$style[propName], val);
  }
  return doDecreaseCSSValue(props.$defaultCustomStyle[propName], val);
};

export const multiplyCSSValue = (props: any, propName: string, val: any) => {
  if (props.$style && props.$style[propName] !== undefined) {
    return doMultiplyCSSValue(props.$style[propName], val);
  }
  return doMultiplyCSSValue(props.$defaultCustomStyle[propName], val);
};

export const selectProps = (props: any, propName: string) => {
  if (props.$style && props.$style[propName] !== undefined) {
    return props.$style[propName];
  }
  return props.$defaultCustomStyle[propName];
};
