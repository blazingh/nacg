import BlockInfo from "@/components/edit/blockInfo";
import { pb } from "@/lib/pocketbase";
import { Block } from "@/types/blocks";

interface PageProps {
  params: {
    block: string;
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const block = await pb.getOne<Block>(params.block, params.id);

  if (!block)
    return (
      <div>
        <p>Block not found</p>
      </div>
    );

  return (
    <div>
      <BlockInfo _block={block} />
      <pre className="text-xs">{JSON.stringify(block, null, 2)}</pre>
    </div>
  );
}
