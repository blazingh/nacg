import { AddBlock } from "@/components/blocks/addBlock";
import { BlocksList } from "@/components/blocks/blocksList";
import { Label } from "@/components/ui/label";
import { pb } from "@/lib/pocketbase";
import { BlockType, ComponentBlock } from "@/types/blocks";

export const revalidate = 0;

export default async function Home() {
  const componentBlocks = await pb.geFullList<ComponentBlock>(
    "component_blocks"
  );

  const textBlocks = await pb.geFullList<ComponentBlock>("text_blocks");

  const imageBlocks = await pb.geFullList<ComponentBlock>("image_blocks");

  const buttonBlocks = await pb.geFullList<ComponentBlock>("button_blocks");

  return (
    <div>
      {/* <pre className="text-xs">{JSON.stringify(componentBlocks, null, 2)}</pre> */}
      {/* <pre className="text-xs">{JSON.stringify(textBlocks, null, 2)}</pre> */}
      {/* <pre className="text-xs">{JSON.stringify(imageBlocks, null, 2)}</pre> */}
      {/* <pre className="text-xs">{JSON.stringify(buttonBlocks, null, 2)}</pre> */}
      <div className="flex flex-row align-center">
        <h1>components</h1>
        <AddBlock type={BlockType.component_block} />
      </div>
      <BlocksList
        blocks={componentBlocks || []}
        type={BlockType.component_block}
      />

      <div className="flex flex-row align-center">
        <h1>text</h1>
        <AddBlock type={BlockType.text_block} />
      </div>
      <BlocksList blocks={textBlocks || []} type={BlockType.text_block} />

      <div className="flex flex-row align-center">
        <h1>images</h1>
        <AddBlock type={BlockType.image_block} />
      </div>
      <BlocksList blocks={imageBlocks || []} type={BlockType.image_block} />

      <div className="flex flex-row align-center">
        <h1>buttons</h1>
        <AddBlock type={BlockType.button_block} />
      </div>
      <BlocksList blocks={buttonBlocks || []} type={BlockType.button_block} />
    </div>
  );
}
