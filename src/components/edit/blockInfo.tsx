"use client";
import { useContext, useState } from "react";
import { BlockEditContext } from "./blockEdit";
import { InputWithLabel } from "../ui/input-with-label";

export default function BlockInfo() {
  const blockEditContext = useContext(BlockEditContext);

  console.log("blockEditContext", blockEditContext);

  if (!blockEditContext)
    return (
      <div>
        <p>no block edit context</p>
      </div>
    );

  const { block, updateBlockState, saveBlock } = blockEditContext;

  if (block)
    return (
      <div>
        <InputWithLabel
          label="Block Name"
          value={block.name}
          onChange={(e) => {
            updateBlockState({ name: e.target.value });
          }}
          onBlur={() => {
            saveBlock();
          }}
        />

        <p>no block data</p>
      </div>
    );

  return <div></div>;
}
