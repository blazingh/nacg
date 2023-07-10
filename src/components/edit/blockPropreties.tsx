"use client";

import { useContext } from "react";
import { BlockEditContext } from "./blockEdit";
import { SelectionWithOptions } from "../ui/selectionWithOptions";
import { StylesOptions } from "@/constants/styles";
import { Button } from "../ui/button";
import { Block } from "@/types/blocks";

export function BlockProperties() {
  const blockEditContext = useContext(BlockEditContext);

  if (!blockEditContext)
    return (
      <div>
        <p>no block edit context</p>
      </div>
    );

  const { block, saveBlock, type, updateBlockStyle } = blockEditContext;

  // switch (type) {
  //   case BlockType.componentBlock:
  //     return <ComponentProperties />;
  //   default:
  return (
    <div className="flex flex-col gap-2.5 w-full max-w-sm items-start border border-gray-300 rounded-md p-2.5">
      <p>Block Properties</p>
      {/*  display block properties */}
      <DisplayProperties block={block} updateBlockStyle={updateBlockStyle} />
      {/*  save block */}
      <Button className="w-full" onClick={saveBlock}>
        Save Block
      </Button>
    </div>
  );
  // }
}

function DisplayProperties({
  block,
  updateBlockStyle,
}: {
  block: Block;
  updateBlockStyle: (key: string, value: any) => void;
}) {
  return (
    <div>
      <SelectionWithOptions
        label="Block Type"
        options={StylesOptions.display}
        value={block.property?.style.display || ""}
        onChange={(value) => {
          updateBlockStyle("display", value);
        }}
      />
    </div>
  );
}
