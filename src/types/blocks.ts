import { CSSProperties } from "react";

export enum BlockType {
  component_block = "component_block",
  text_block = "text_block",
  image_block = "image_block",
  button_block = "button_block",
}

export enum BlockChildScope {
  local = "local",
  global = "global",
}

export enum TextBlockType {
  text = "text",
  key = "key",
  locale = "locale",
}

export enum ImageBlockType {
  src = "src",
  key = "key",
}

export enum Locales {
  en = "en",
  tr = "tr",
  ar = "ar",
}

export type Block = ComponentBlock | TextBlock | ImageBlock | ButtonBlock;

export interface CommonBlockChildren {
  id: string;
  type: BlockType;
  scope: BlockChildScope;
}

export interface ComponentBlock {
  id: string;
  name: string;
  style: CSSProperties;
  children: CommonBlockChildren[];
  local_blocks: string[];
  component_blocks: string[];
  text_blocks: string[];
  image_blocks: string[];
  button_blocks: string[];
  expand: {
    component_blocks?: ComponentBlock[];
    text_blocks?: TextBlock[];
    image_blocks?: ImageBlock[];
    button_blocks?: ButtonBlock[];
  };
}

export interface TextBlock {
  id: string;
  name: string;
  style: CSSProperties;
  type?: TextBlockType;
  text?: string;
  key?: string;
  locale?: { [key in Locales]?: string };
}

export interface ImageBlock {
  id: string;
  name: string;
  style: CSSProperties;
  type?: ImageBlockType;
  src?: string;
  key?: string;
}

export interface ButtonBlock {
  id: string;
  name: string;
  style: CSSProperties;
  text?: string;
}
