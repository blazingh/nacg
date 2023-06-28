"use client";
import { Edit, Eye, MoreHorizontalIcon, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { UseAuthHook } from "@/hooks/useAuthHook";
import { useRouter } from "next/navigation";
import { Block, BlockType } from "@/types/blocks";
import { pb } from "@/lib/pocketbase";
import { useToast } from "../ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { blockTypeNames } from "@/constants/blocks";

export function BlocksListOptions({
  block,
  type,
}: {
  block: Block;
  type: BlockType;
}) {
  const { user } = UseAuthHook();
  const router = useRouter();

  const { toast } = useToast();

  const handleDeleteBlock = async () => {
    const res = await pb.delete(type + "s", block.id);

    if (res) {
      toast({
        title: "Block deleted",
        description: `${blockTypeNames[type]} Block '${block.name}' deleted successfully`,
      });
      router.refresh();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Block '${block.name}' could not be deleted`,
      });
    }
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontalIcon className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => router.push(`/view/${type}/${block.id}`)}
            className="flex items-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </DropdownMenuItem>
          {user && (
            <DropdownMenuItem
              onClick={() => router.push(`/edit/${type}/${block.id}`)}
              className="flex items-center"
            >
              <Edit className="w-4 h-4 mr-2" />
              Modify
            </DropdownMenuItem>
          )}
          {user && (
            <>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem className="flex items-center">
                  <Trash className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DialogTrigger>
            </>
          )}
        </DropdownMenuContent>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure ?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete this {blockTypeNames[type]} block ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="submit"
              variant="destructive"
              onClick={handleDeleteBlock}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>{" "}
      </DropdownMenu>
    </Dialog>
  );
}
