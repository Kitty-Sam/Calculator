export enum buttonShape {
  ROUND = 'round',
  SQUARE = 'square',
  RECTANGULAR = 'rectangular',
}

export type ButtonPropsType = {
  backgroundColor?: string;
  disabled?: boolean;
  onPress: () => void;
  title: string;
  shape: buttonShape;
};
