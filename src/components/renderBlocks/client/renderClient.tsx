"use client";

import { Block, BlockType } from "@/types/blocks";
import { createContext } from "react";

export const RenderClientContext = createContext<any>({});

interface RenderClientProps {
  type: BlockType;
  blockData: Block;
  context: { [key: string]: any };
}

export const RenderClient = ({
  type,
  blockData,
  context,
}: RenderClientProps) => {
  return (
    <RenderClientContext.Provider value={{ context }}>
      <div></div>
    </RenderClientContext.Provider>
  );
};
