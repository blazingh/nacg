"use client";

import { createContext, useContext, useState } from "react";
import { BlockEditContext } from "./blockEdit";
import { ComponentBlock } from "@/types/blocks";

interface ComponentPropertiesContext {
  selectedComponent: ComponentBlock;
  updateStyle: (attribute: string, value: string) => void;
}

export const ComponentPropertiesContext =
  createContext<ComponentPropertiesContext | null>(null);

export function ComponentProperties() {
  const blockEditContext = useContext(BlockEditContext);

  const [selectedComponent, setSelectedComponent] = useState<ComponentBlock>(
    blockEditContext?.block as ComponentBlock
  );

  if (!blockEditContext)
    return (
      <div>
        <p>no block edit context</p>
      </div>
    );

  const { block, updateBlockState, saveBlock } = blockEditContext;

  const updateStyle = (attribute: string, value: string) => {
    setSelectedComponent((prev) => ({
      ...prev,
      style: { ...prev.style, [attribute]: value },
    }));
  };

  return (
    <ComponentPropertiesContext.Provider
      value={{
        selectedComponent,
        updateStyle,
      }}
    >
      <div>
        <p>Block Properties</p>
      </div>
    </ComponentPropertiesContext.Provider>
  );
}
