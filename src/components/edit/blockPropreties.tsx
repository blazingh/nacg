"use client";

import { useContext } from "react";
import { BlockEditContext } from "./blockEdit";
import { BlockType } from "@/types/blocks";
import { ComponentProperties } from "./componentPorpreties";
import { SelectionWithOptions } from "../ui/selectionWithOptions";
import { StylesOptions } from "@/constants/styles";
import { Button } from "../ui/button";

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
      <SelectionWithOptions
        label="Block Type"
        options={StylesOptions.display}
        value={block.property?.style.display || ""}
        onChange={(value) => {
          updateBlockStyle("display", value);
        }}
      />

      {/*  save block */}
      <Button className="w-full" onClick={saveBlock}>
        Save Block
      </Button>
    </div>
  );
  // }
}
