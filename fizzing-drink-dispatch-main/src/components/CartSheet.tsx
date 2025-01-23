import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onCheckout: () => void;
}

export function CartSheet({ isOpen, onClose, items, onCheckout }: CartSheetProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 -mx-6 px-6">
            {items.map((item, index) => (
              <div key={index} className="py-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Quantidade: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                {index < items.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </ScrollArea>
          <div className="space-y-4 pt-4">
            <Separator />
            <div className="flex justify-between">
              <span className="font-medium">Total</span>
              <span className="font-medium">R$ {total.toFixed(2)}</span>
            </div>
            <Button onClick={onCheckout} className="w-full">
              Finalizar no WhatsApp
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}