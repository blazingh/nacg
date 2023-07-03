import { pb } from "@/lib/pocketbase";
import { Block, BlockType } from "@/types/blocks";
import { createContext, useState } from "react";
import { useToast } from "../ui/use-toast";

interface BlockEditProps {
  _block: Block;
  type: BlockType;
}

interface BlockEditContext {
  block: Block;
  type: BlockType;
  updateBlockState: (attr: string, value: any) => void;
  updateBlock: () => void;
}

export const BlockEditContext = createContext<BlockEditContext | null>(null);

export default function BlockEdit({ _block, type }: BlockEditProps) {
  const { toast } = useToast();

  const [block, setBlock] = useState<Block>(_block);

  const updateBlockState = (attr: string, value: any) => {
    setBlock((prev) => ({ ...prev, [attr]: value }));
  };

  const updateBlock = async () => {
    const res = await pb.update<Block>(type, block.id, block);

    if (res)
      toast({
        title: "Block updated",
        description: `Block ${block.id} updated`,
      });
    else
      toast({
        variant: "destructive",
        title: "Block not updated",
        description: `Block ${block.id} not updated`,
      });
  };

  return (
    <BlockEditContext.Provider
      value={{ block, type, updateBlockState, updateBlock }}
    >
      <div>
        <p>BlockEdit</p>
      </div>
    </BlockEditContext.Provider>
  );
}
