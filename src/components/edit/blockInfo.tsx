"use client";
import { Block, BlockType } from "@/types/blocks";
import { useState } from "react";

interface BlockInfoProps {
  _block: Block;
  type: BlockType;
}

export default function BlockInfo({ _block, type }: BlockInfoProps) {
  const [block, setBlock] = useState<Block>(_block);
  if (!block)
    return (
      <div>
        <p>no block data</p>
      </div>
    );

  return <div></div>;
}
