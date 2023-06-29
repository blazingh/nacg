import { Block, BlockType } from "@/types/blocks";

interface RenderClientProps {
  type: BlockType;
  blockData: Block;
  context: { [key: string]: any };
}

export const RenderClient = ({ type, blockData }: RenderClientProps) => {
  return <div></div>;
};
