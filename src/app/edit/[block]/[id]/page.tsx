import BlockEdit from "@/components/edit/blockEdit";
import BlockInfo from "@/components/edit/blockInfo";
import { pb } from "@/lib/pocketbase";
import { Block } from "@/types/blocks";

export const revalidate = 0;

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
      <BlockEdit _block={block} type={params.block as any} />
      <pre className="text-xs">{JSON.stringify(block, null, 2)}</pre>
    </div>
  );
}
