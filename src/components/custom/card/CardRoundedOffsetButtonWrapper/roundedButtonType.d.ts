export type RoundedButtonListType = {
  text: string;
  to: string;
};

export type CardRoundedOffsetButtonWrapperProps = {
  buttonList: RoundedButtonListType[];
};

export type PrositionType = "left" | "right" | "top" | "bottom";

export type RoundedOffsetButtonProps = {
  to: string;
  position: PrositionType;
  onClick?: () => void;
  children: React.ReactNode;
};
