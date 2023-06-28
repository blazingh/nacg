import { pb } from "@/lib/pocketbase";

interface PageProps {
  params: {
    block: string;
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const block = pb.getOne(params.block, params.id);

  if (!block)
    return (
      <div>
        <p>Block not found</p>
      </div>
    );

  return (
    <div>
      <pre className="text-xs">{JSON.stringify(block, null, 2)}</pre>
    </div>
  );
}
