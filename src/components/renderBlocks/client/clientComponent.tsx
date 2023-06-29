import { ComponentBlock } from "@/types/blocks";
import { RenderClientContext } from "./renderClient";
import { useContext } from "react";

interface ClientComponentProps {
  blockData: ComponentBlock;
}

export function ClientComponent({ blockData }: ClientComponentProps) {
  const { context } = useContext(RenderClientContext);

  return <div></div>;
}
