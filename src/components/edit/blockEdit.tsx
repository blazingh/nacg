"use client";
import { pb } from "@/lib/pocketbase";
import { Block, BlockType } from "@/types/blocks";
import { createContext, useState } from "react";
import { useToast } from "../ui/use-toast";
import BlockInfo from "./blockInfo";

interface BlockEditProps {
  _block: Block;
  type: BlockType;
}

interface BlockEditContext {
  block: Block;
  type: BlockType;
  updateBlockState: (value: { [key: string]: any }) => void;
  updateBlockProperty: (key: string, value: any) => void;
  updateBlockStyle: (key: string, value: any) => void;
  updateBlockExtra: (key: string, value: any) => void;
  saveBlock: () => void;
}

export const BlockEditContext = createContext<BlockEditContext | null>(null);

export default function BlockEdit({ _block, type }: BlockEditProps) {
  const { toast } = useToast();

  const [block, setBlock] = useState<Block>(_block);

  const updateBlockState = (value: { [key: string]: any }) => {
    setBlock((prev) => ({ ...prev, ...value }));
  };

  const updateBlockProperty = (key: string, value: any) => {
    setBlock((prev) => ({
      ...prev,
      properties: { ...prev.property, [key]: value },
    }));
  };

  const updateBlockStyle = (key: string, value: any) => {
    setBlock((prev) => ({
      ...prev,
      porperties: {
        ...prev.property,
        style: { ...prev.property.style, [key]: value },
      },
    }));
  };

  const updateBlockExtra = (key: string, value: any) => {
    setBlock((prev) => ({
      ...prev,
      porperties: {
        ...prev.property,
        extra: { ...prev.property.extra, [key]: value },
      },
    }));
  };

  const saveBlock = async () => {
    // check if there are any changes
    if (JSON.stringify(block) === JSON.stringify(_block)) {
      toast({
        title: "No changes",
        description: `No changes to save`,
      });
      return;
    }

    const res = await pb.update<Block>(type, block.id, block);

    if (res)
      toast({
        title: "Block updated",
        description: `Block '${block.id}' updated`,
      });
    else
      toast({
        variant: "destructive",
        title: "Block not updated",
        description: `Block '${block.id}' not updated`,
      });
  };

  return (
    <BlockEditContext.Provider
      value={{
        block,
        type,
        updateBlockState,
        updateBlockProperty,
        updateBlockStyle,
        updateBlockExtra,
        saveBlock,
      }}
    >
      <div className="w-full h-full grid grid-cols-6">
        <div className="col-span-1">
          <BlockInfo />
        </div>
        <div className="col-span-4"></div>
        <div className="col-span-1"></div>
      </div>
    </BlockEditContext.Provider>
  );
}
