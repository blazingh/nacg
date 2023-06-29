import { Block, BlockType } from "@/types/blocks";
import { BlocksListOptions } from "./blocksListOptions";
import { Label } from "../ui/label";

interface BlocksList {
  blocks: Block[];
  type: BlockType;
}

export function BlocksList({ blocks, type }: BlocksList) {
  return (
    <div className="flex w-full h-full flex-wrap gap-x-4 gap-y-4">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="h-24 border w-64 rounded bg-secondary p-2 relative justify-between flex flex-col"
        >
          <div className="absolute top-0 right-0 p-2">
            <BlocksListOptions block={block} type={type} />
          </div>
          <Label className="text-xl font-semibold">{block.name}</Label>
          <Label className="text-sm">id : {block.id}</Label>
        </div>
      ))}
    </div>
  );
}
