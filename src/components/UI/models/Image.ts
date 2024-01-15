import { PropsWithChildren } from "react";

export type BasicImageWithContentType = PropsWithChildren<{
  containerClassName?: string;
  imageClassName?: string;
  captionClassName?: string;
  containerStyle?: React.CSSProperties;
  captionStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  src: string;
  onClick?: () => void;
}>;

export type ImageWithContentType = PropsWithChildren<{
  containerClassName?: string;
  captionClassName?: string;
  imageClassName?: string;
  containerStyle?: React.CSSProperties;
  captionStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  src: string;
}>;
