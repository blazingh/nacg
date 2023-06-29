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
import { useState } from "react";

export function BlocksListOptions({
  block,
  type,
}: {
  block: Block;
  type: BlockType;
}) {
  const { user } = UseAuthHook();
  const router = useRouter();

  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleDeleteBlock = async () => {
    const res = await pb.delete(type, block.id);

    if (res) {
      toast({
        title: "Block deleted",
        description: `${blockTypeNames[type]} Block '${block.name}' deleted successfully`,
      });
      setDialogOpen(false);
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
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DropdownMenu>
        {/* three dots icon */}
        <DropdownMenuTrigger>
          <MoreHorizontalIcon className="w-4 h-4" />
        </DropdownMenuTrigger>
        {/* dropdown menu */}
        <DropdownMenuContent>
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* preview */}
          <DropdownMenuItem
            onClick={() => router.push(`/view/${type}/${block.id}`)}
            className="flex items-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </DropdownMenuItem>
          {user && (
            <>
              {/* edit */}
              <DropdownMenuItem
                onClick={() => router.push(`/edit/${type}/${block.id}`)}
                className="flex items-center mt-2"
              >
                <Edit className="w-4 h-4 mr-2" />
                Modify
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* delete */}
              <DialogTrigger asChild>
                <DropdownMenuItem className="flex items-center mt-2">
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
