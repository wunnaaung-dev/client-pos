import { ReactNode } from "react";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../ui/dialog";
import { Separator } from "../ui/separator";

interface Props {
  dialogTitle: string;
  dialogDesc?: string;
  children?: ReactNode;
  type: "create" | "delete" | "edit";
  onClick: () => void;
}

const AlertDialog: React.FC<Props> = ({ dialogTitle, dialogDesc, children, type, onClick }) => {
  let buttonText: string = "Action";
  let buttonVariant: "destructive" | "secondary" | "default" | "outline" | "ghost" | "link" = "default";

  if (type === "create") {
    buttonText = "Create";
    buttonVariant = "default";
  } else if (type === "delete") {
    buttonText = "Delete";
    buttonVariant = "destructive";
  } else if (type === "edit") {
    buttonText = "Edit";
    buttonVariant = "default";
  }

  return (
    <DialogContent>
      <DialogHeader>

        <DialogTitle>{dialogTitle}</DialogTitle>

        {dialogDesc && <DialogDescription>{dialogDesc}</DialogDescription>}
      </DialogHeader>
      <Separator />
      {children}
      <DialogFooter className="space-x-2">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" onClick={onClick} variant={buttonVariant}>
          {buttonText}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AlertDialog;
