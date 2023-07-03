"use client";

import { createContext, useContext } from "react";
import { BlockEditContext } from "./blockEdit";

interface BlockPropertiesContext { }

export const BockPropertiesContext =
  createContext<BlockPropertiesContext | null>(null);

export function BlockProperties() {
  const blockEditContext = useContext(BlockEditContext);

  if (!blockEditContext)
    return (
      <div>
        <p>no block edit context</p>
      </div>
    );

  const { block, updateBlockState, saveBlock } = blockEditContext;

  return (
    <BockPropertiesContext.Provider value={{}}>
      <div>
        <p>Block Properties</p>
      </div>
    </BockPropertiesContext.Provider>
  );
}
