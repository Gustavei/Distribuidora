import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

const products = {
  "refrigerantes": [
    {
      name: "Coca-Cola Original 2L",
      description: "Refrigerante Coca-Cola PET 2 litros",
      price: 10.99,
      image: "/placeholder.svg",
    },
    {
      name: "Coca-Cola Retornável 2L",
      description: "Refrigerante Coca-Cola Retornável 2L",
      price: 6.99,
      image: "/placeholder.svg",
    },
    {
      name: "Coca-Cola Retornável Sem Açúcar 2L",
      description: "Refrigerante Coca-Cola Retornável Sem Açúcar 2L",
      price: 6.99,
      image: "/placeholder.svg",
    },
    {
      name: "Coca-Cola Sabor Original 600ml",
      description: "Refrigerante Coca-Cola 600ml",
      price: 5.99,
      image: "/placeholder.svg",
    },
    {
      name: "Coca-Cola Sem Açúcar 600ml",
      description: "Refrigerante Coca-Cola Sem Açúcar 600ml",
      price: 5.99,
      image: "/placeholder.svg",
    },
    {
      name: "Coca-Cola Sabor Original 200ml",
      description: "Refrigerante Coca-Cola 200ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
    {
      name: "Coca-Cola Sem Açúcar 200ml",
      description: "Refrigerante Coca-Cola Sem Açúcar 200ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
    {
      name: "Refrigerante Mantiqueira Guaraná 200ml",
      description: "Refrigerante Mantiqueira Guananá 200ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
    {
      name: "Refrigerante Mantiqueira Guaraná 2L",
      description: "Refrigerante Mantiqueira Guananá 2L",
      price: 5.99,
      image: "/placeholder.svg",
    },
    {
      name: "Refrigerante Mantiqueira Uva 2L",
      description: "Refrigerante Mantiqueira Uva 2L",
      price: 5.99,
      image: "/placeholder.svg",
    },
    {
      name: "Refrigerante Mantiqueira Limão 2L",
      description: "Refrigerante Mantiqueira Limão 2L",
      price: 5.99,
      image: "/placeholder.svg",
    },
    {
      name: "Refrigerante Mantiqueira Laranja 2L",
      description: "Refrigerante Mantiqueira Laranja 2L",
      price: 5.99,
      image: "/placeholder.svg",
    },
    {
      name: "Refrigerante Mantiqueira Black-Cola 2L",
      description: "Refrigerante Mantiqueira Black-Cola 2L",
      price: 5.99,
      image: "/placeholder.svg",
    },
  ],
  "agua-com-gas": [
    {
      name: "Água Mineral Caxambu Com Gás 510ml",
      description: "Água mineral com gás Caxambu 510ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
    {
      name: "Água Mineral Caxambu Com Gás 1,260L",
      description: "Água mineral com gás Caxambu 1,260L",
      price: 3.99,
      image: "/placeholder.svg",
    },
    {
      name: "Água Mineral Passa Quatro Com Gás 510ml",
      description: "Água mineral com gás Passa Quatro 510ml",
      price: 3.99,
      image: "/placeholder.svg",
    },
    {
      name: "Água Mineral Passa Quatro Com Gás 2L",
      description: "Água mineral com gás Passa Quatro 2L",
      price: 3.99,
      image: "/placeholder.svg",
    },
  ],
  "agua-sem-gas": [
    {
      name: "Água Mineiral Caxambu Sem Gás 510ml",
      description: "Água mineral sem gás Caxambu 510ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
    {
      name: "Água Mineiral Caxambu Sem Gás 1,260L",
      description: "Água mineral sem gás Caxambu 1,260L",
      price: 3.99,
      image: "/placeholder.svg",
    },
    {
      name: "Água Mineral Passa Quatro Sem Gás 510ml",
      description: "Água mineral sem gás Passa Quatro 510ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
    {
      name: "Água Mineral Passa Quatro Sem Gás 1,5L",
      description: "Água mineral sem gás Passa Quatro 1,5L",
      price: 3.99,
      image: "/placeholder.svg",
    },
  ],
  "sucos": [
    {
      name: "Del Valle Uva 1L",
      description: "Suco de uva Del Valle 1 litro",
      price: 4.99,
      image: "/placeholder.svg",
      discount: 15,
    },
    {
      name: "Del Valle Uva 1,5L",
      description: "Suco de uva Del Valle 1,5 litro",
      price: 5.99,
      image: "/placeholder.svg",
      discount: 15,
    },
    {
      name: "Guaravita 290ml",
      description: "Guaravita 290ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
    {
      name: "Guaravita Açaí 290ml",
      description: "Guaravita Açaí 290ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
  ],
  "achocolatado":[
    {
      name: "Achocolatado Toddynho 200ml",
      description: "Achocolatado Toddynho 200ml",
      price: 2.99,
      image: "/placeholder.svg",
    },
  ],
  "energetico":[
    {
      name: "Monster Energy 473ml",
      description: "Monster Energy 473ml",
      price: 10.99,
      image: "/placeholder.svg",
    },
    {
      name: "Monster Mango Loco 473ml",
      description: "Monster Mango Loco 473ml",
      price: 10.99,
      image: "/placeholder.svg",
    },
  ],
  "isotonico":[
    {
      name: "Gatorade Sabor Uva 500ml",
      description: "Gatorade Sabor Uva 500ml",
      price: 5.99,
      image: "/placeholder.svg",
    },
    {
      name: "Gatorade Sabor Limão 500ml",
      description: "Gatorade Sabor Uva 500ml",
      price: 5.99,
      image: "/placeholder.svg",
    },
  
  ]
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("refrigerantes");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main className="container mx-auto px-4 pt-40 md:pt-32 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products[activeCategory as keyof typeof products].map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;