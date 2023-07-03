"use client";
import { Block, BlockType } from "@/types/blocks";
import { useContext, useState } from "react";
import { BlockEditContext } from "./blockEdit";

export default function BlockInfo() {
  const blockEditContext = useContext(BlockEditContext);

  if (!blockEditContext)
    return (
      <div>
        <p>no block edit context</p>
      </div>
    );

  const { block, updateBlockState } = blockEditContext;

  if (!block)
    return (
      <div>
        <p>no block data</p>
      </div>
    );

  return <div></div>;
}
