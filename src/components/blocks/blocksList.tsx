"use client";
import { Block, BlockType } from "@/types/blocks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import { UseAuthHook } from "@/hooks/useAuthHook";
import { useRouter } from "next/navigation";

interface BlocksList {
  blocks: Block[];
  type: BlockType;
}

export function BlocksList({ blocks, type }: BlocksList) {
  const { user } = UseAuthHook();
  const router = useRouter();

  return (
    <div className="flex w-full h-full flex-wrap gap-x-4 gap-y-4">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="h-24 border w-64 rounded bg-secondary p-2 relative"
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="absolute top-0 right-0 p-2">
              <MoreHorizontalIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push(`/view/${type}/${block.id}`)}
              >
                Preview
              </DropdownMenuItem>
              {user && (
                <DropdownMenuItem
                  onClick={() => router.push(`/edit/${type}/${block.id}`)}
                >
                  Modify
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <h2>{block.name}</h2>
          <p>{block.id}</p>
        </div>
      ))}
    </div>
  );
}
