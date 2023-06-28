import { Block, BlockType } from "@/types/blocks";
import { BlocksListOptions } from "./blocksListOptions";

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
          className="h-24 border w-64 rounded bg-secondary p-2 relative"
        >
          <div className="absolute top-0 right-0 p-2">
            <BlocksListOptions block={block} type={type} />
          </div>
          <h2>{block.name}</h2>
          <p>{block.id}</p>
        </div>
      ))}
    </div>
  );
}
