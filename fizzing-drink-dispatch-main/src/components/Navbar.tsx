import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const categories = [
  { id: "refrigerantes", label: "Refrigerantes" },
  { id: "agua-com-gas", label: "Água Com Gás" },
  { id: "agua-sem-gas", label: "Água Sem Gás" },
  { id: "fardos", label: "Fardos" },
  { id: "sucos", label: "Sucos" }, 
  { id: "achocolatado", label: "Achocolatados" },
  { id: "energetico", label: "Energéticos" },
  { id: "isotonico", label: "Isotônicos" },
];

interface NavbarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const Navbar = ({ activeCategory, onCategoryChange }: NavbarProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-red-600 shadow-sm fixed top-0 z-50">
      <div className="container mx-auto py-2 px-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/lovable-uploads/5c2e0b38-b14c-433c-90b3-c4035aa896b5.png"
                alt="Distribuidora Dois Irmãos"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-white">Distribuidora Dois Irmãos</span>
            </Link>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="pl-8 bg-white w-full"
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              </div>
              <button className="text-white">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
          <Tabs value={activeCategory} onValueChange={onCategoryChange} className="w-full">
            <TabsList className="w-full justify-between bg-white flex-wrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {isMobile ? category.label.split(' ')[0] : category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};