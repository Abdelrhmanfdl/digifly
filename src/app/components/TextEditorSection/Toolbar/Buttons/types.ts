export type actionButtonProps = {
  isActive: boolean;
  onClick: Function;
};

export type selectorProps = {
  value?: string;
  onUpdate: Function;
  options: OptionType[];
};

export type OptionType = {
  label: React.ReactNode;
  value: string;
  onClick?: Function;
};
