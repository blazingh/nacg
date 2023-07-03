import BlockEdit from "@/components/edit/blockEdit";
import BlockInfo from "@/components/edit/blockInfo";
import { pb } from "@/lib/pocketbase";
import { Block, BlockType } from "@/types/blocks";

export const revalidate = 0;

interface PageProps {
  params: {
    block: string;
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  // check if block exist in BlockTypes enum
  if (!Object.values(BlockType).includes(params.block as any))
    return (
      <div>
        <p>Block Type not found</p>
      </div>
    );

  const block = await pb.getOne<Block>(params.block, params.id);

  // check if block and type are valid

  if (!block)
    return (
      <div>
        <p>Block not found</p>
      </div>
    );

  return (
    <div>
      <BlockEdit _block={block} type={params.block as BlockType} />
    </div>
  );
}
