"use client";

import { createContext, useContext, useState } from "react";
import { BlockType, ComponentBlock } from "@/types/blocks";

export function ComponentProperties() {
  const updateStyle = (value: { [key: string]: any }) => { };

  return (
    <div>
      <p>Block Properties</p>
    </div>
  );
}
