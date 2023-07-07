import { CSSProperties } from "react";

export enum BlockType {
  componentBlock = "component_blocks",
  textBlock = "text_blocks",
  imageBlock = "image_blocks",
  buttonBlock = "button_blocks",
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

interface BlockProprties {
  style: CSSProperties;
  extra?: { [key: string]: any };
}

interface BaseBlock {
  id: string;
  name: string;
  properties: BlockProprties;
}

export type Block = ComponentBlock | TextBlock | ImageBlock | ButtonBlock;

export interface CommonBlockChildren {
  id: string;
  type: BlockType;
  scope: BlockChildScope;
}

export interface ComponentBlock extends BaseBlock {
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

export interface TextBlock extends BaseBlock {
  type?: TextBlockType;
  text?: string;
  key?: string;
  locale?: { [key in Locales]?: string };
}

export interface ImageBlock extends BaseBlock {
  type?: ImageBlockType;
  src?: string;
  key?: string;
}

export interface ButtonBlock extends BaseBlock {
  text?: string;
}
