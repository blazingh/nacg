"use client";

import { useContext } from "react";
import { BlockEditContext } from "./blockEdit";
import { BlockType } from "@/types/blocks";
import { ComponentProperties } from "./componentPorpreties";

export function BlockProperties() {
  const blockEditContext = useContext(BlockEditContext);

  if (!blockEditContext)
    return (
      <div>
        <p>no block edit context</p>
      </div>
    );

  const { block, saveBlock, type, updateBlockStyle } = blockEditContext;

  switch (type) {
    case BlockType.componentBlock:
      return <ComponentProperties />;
    default:
      return (
        <div>
          <p>Block Properties</p>
          {/*  display block properties */}
        </div>
      );
  }
}
