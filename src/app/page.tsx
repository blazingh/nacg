import { AddBlock } from "@/components/blocks/addBlock";
import { BlocksList } from "@/components/blocks/blocksList";
import { Label } from "@/components/ui/label";
import { pb } from "@/lib/pocketbase";
import { BlockType, ComponentBlock } from "@/types/blocks";
import { Frame, ImageIcon, MousePointerClick, Quote } from "lucide-react";

export const revalidate = 0;

export default async function Home() {
  const componentBlocks = await pb.geFullList<ComponentBlock>(
    "component_blocks"
  );

  const textBlocks = await pb.geFullList<ComponentBlock>("text_blocks");

  const imageBlocks = await pb.geFullList<ComponentBlock>("image_blocks");

  const buttonBlocks = await pb.geFullList<ComponentBlock>("button_blocks");

  return (
    <div className="w-full flex flex-col gap-y-6 items-center">
      {/* <pre className="text-xs">{JSON.stringify(componentBlocks, null, 2)}</pre> */}
      {/* <pre className="text-xs">{JSON.stringify(textBlocks, null, 2)}</pre> */}
      {/* <pre className="text-xs">{JSON.stringify(imageBlocks, null, 2)}</pre> */}
      {/* <pre className="text-xs">{JSON.stringify(buttonBlocks, null, 2)}</pre> */}
      <div className="max-w-6xl w-full">
        <div className="flex flex-row items-center w-full justify-between mb-2 h-10">
          <div className="flex flex-row items-center">
            <Frame className="mr-2" />
            <Label className="text-xl font-semibold">Components</Label>
          </div>
          <AddBlock type={BlockType.componentBlock} />
        </div>
        <BlocksList
          blocks={componentBlocks || []}
          type={BlockType.componentBlock}
        />
      </div>

      <div className="max-w-6xl w-full">
        <div className="flex flex-row items-center w-full justify-between mb-2 h-10">
          <div className="flex flex-row items-center">
            <Quote className="mr-2" />
            <Label className="text-xl font-semibold">Text</Label>
          </div>
          <AddBlock type={BlockType.textBlock} />
        </div>
        <BlocksList blocks={textBlocks || []} type={BlockType.textBlock} />
      </div>

      <div className="max-w-6xl w-full">
        <div className="flex flex-row items-center w-full justify-between mb-2 h-10">
          <div className="flex flex-row items-center">
            <ImageIcon className="mr-2" />
            <Label className="text-xl font-semibold">Images</Label>
          </div>
          <AddBlock type={BlockType.imageBlock} />
        </div>
        <BlocksList blocks={imageBlocks || []} type={BlockType.imageBlock} />
      </div>

      <div className="max-w-6xl w-full">
        <div className="flex flex-row items-center w-full justify-between mb-2 h-10">
          <div className="flex flex-row items-center">
            <MousePointerClick className="mr-2" />
            <Label className="text-xl font-semibold">Buttons</Label>
          </div>
          <AddBlock type={BlockType.buttonBlock} />
        </div>
        <BlocksList blocks={buttonBlocks || []} type={BlockType.buttonBlock} />
      </div>
    </div>
  );
}
