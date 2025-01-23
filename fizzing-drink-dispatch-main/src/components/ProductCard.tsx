import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { CartSheet } from "./CartSheet";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  discount?: number;
}

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

// Using a simple global cart state since this is a small app
let globalCart: CartItem[] = [];

export const ProductCard = ({ name, description, price, image, discount }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const finalPrice = discount ? price * (1 - discount / 100) : price;

  const addToCart = () => {
    const existingItemIndex = globalCart.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
      globalCart[existingItemIndex].quantity += quantity;
    } else {
      globalCart.push({
        name,
        quantity,
        price: finalPrice
      });
    }

    toast({
      title: "Produto adicionado ao carrinho",
      description: `${quantity}x ${name} adicionado ao carrinho`,
    });

    setQuantity(1); // Reset quantity after adding to cart
  };

  const handleCheckout = () => {
    if (globalCart.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho antes de finalizar",
        variant: "destructive"
      });
      return;
    }

    setIsCartOpen(true);
  };

  const handleWhatsAppCheckout = () => {
    const message = globalCart.map(item => 
      `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const total = globalCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const whatsappMessage = `Olá! Gostaria de fazer o seguinte pedido:\n\n${message}\n\nTotal: R$ ${total.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/5511974055440?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Clear cart after sending to WhatsApp
    globalCart = [];
    setIsCartOpen(false);
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
            {discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                {discount}% OFF
              </div>
            )}
          </div>
          <CardTitle className="mt-4 text-lg md:text-xl">{name}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center border rounded-md"
              >
                -
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center border rounded-md"
              >
                +
              </button>
            </div>
            <div className="text-right">
              {discount && (
                <span className="text-sm line-through text-muted-foreground">
                  R$ {price.toFixed(2)}
                </span>
              )}
              <div className="text-lg font-bold">
                R$ {finalPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button onClick={addToCart} className="w-full sm:flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar
          </Button>
          <Button onClick={handleCheckout} variant="secondary" className="w-full sm:flex-1">
            Finalizar
          </Button>
        </CardFooter>
      </Card>

      <CartSheet 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={globalCart}
        onCheckout={handleWhatsAppCheckout}
      />
    </>
  );
};