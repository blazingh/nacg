"use client";
import { useContext } from "react";
import { BlockEditContext } from "./blockEdit";
import { InputWithLabel } from "../ui/input-with-label";

export default function BlockInfo() {
  const blockEditContext = useContext(BlockEditContext);

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
      </div>
    );

  return (
    <div>
      <p>no block</p>
    </div>
  );
}
