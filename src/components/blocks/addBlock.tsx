"use client";
import { UseAuthHook } from "@/hooks/useAuthHook";
import { Block, BlockType } from "@/types/blocks";
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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { pb } from "@/lib/pocketbase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { blockTypeNames } from "@/constants/blocks";

interface AddBlockProps {
  type: BlockType;
}

export function AddBlock({ type }: AddBlockProps) {
  const { user } = UseAuthHook();

  const { toast } = useToast();

  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState("");

  const router = useRouter();

  const handleAddBlock = async () => {
    const res = await pb.create<Block>(type, {
      name,
    });

    if (res) {
      toast({
        title: "Block created",
        description: `${blockTypeNames[type]} Block '${name}' created successfully`,
      });
      setDialogOpen(false);
      router.refresh();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Block '${name}' could not be created`,
      });
    }
  };

  if (!user) return null;

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a {blockTypeNames[type]} Block </DialogTitle>
          <DialogDescription>
            input the name of the block you want to create
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddBlock}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
