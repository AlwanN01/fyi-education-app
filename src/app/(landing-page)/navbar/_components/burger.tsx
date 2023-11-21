import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {AlignJustify} from "lucide-react";

export const BurgerActionButtons = () => {
  return (
    <div className={'md:hidden'}>
      <Sheet>
        <SheetTrigger>
          <AlignJustify/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              tes
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
