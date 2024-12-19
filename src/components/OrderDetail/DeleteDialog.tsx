import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type Props = {
  onclick: () => void;
};

export function AlertDialogDemo({ onclick }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="mb-10 mt-4 w-fit items-center justify-center rounded-lg bg-gray-700 p-2 text-white"
          variant="outline"
        >
          Захиалга цуцлах
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Та захиалгаа устгах уу?</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Үгүй</AlertDialogCancel>
          <AlertDialogAction onClick={onclick}>Тийм</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
