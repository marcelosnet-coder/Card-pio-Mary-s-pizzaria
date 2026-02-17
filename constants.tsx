
import { Product } from './types';

export const PIZZARIA_CONFIG = {
  name: "Mary's Pizzaria",
  phone: "81 9 91851200",
  whatsapp: "5581991851200",
  address: "Rua dr. Sebastião Amaral, 1203 Pau Amarelo",
  logoUrl: "https://lh3.googleusercontent.com/p/AF1QipNbiqURXBcIC02b3IWyTtBaxKx3IuC3wHhv0-JI=w1024-h1024-k-no", 
  colors: {
    orange: "#f97316",
    yellow: "#facc15",
    black: "#000000"
  }
};

export const MENU_PIZZAS: Product[] = [
  { id: 'p1', name: 'Mussarela', price: 25.00, ingredients: 'Molho de tomate, mussarela e orégano', imageUrl: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p2', name: 'Calabresa', price: 25.00, ingredients: 'Molho de tomate, mussarela, calabresa e cebola', imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p3', name: 'Mussarela com Catupiry', price: 28.00, ingredients: 'Mussarela coberta com catupiry cremoso', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p4', name: 'Mussarela com Cheddar', price: 28.00, ingredients: 'Mussarela coberta com cheddar cremoso', imageUrl: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p5', name: 'Presunto', price: 29.00, ingredients: 'Mussarela, presunto em fatias e azeitonas', imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p6', name: 'Frango com Queijo', price: 29.00, ingredients: 'Frango desfiado temperado com queijo mussarela', imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p7', name: 'Frango com Queijo e Catupiry', price: 34.90, ingredients: 'Frango desfiado, mussarela e catupiry legítimo', imageUrl: 'https://images.unsplash.com/photo-1593246049226-ded77bfad0cb?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p8', name: 'Bacon', price: 34.90, ingredients: 'Mussarela e generosas fatias de bacon crocante', imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p9', name: 'Portuguesa', price: 34.90, ingredients: 'Mussarela, presunto, ovos, cebola, pimentão e ervilha', imageUrl: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p10', name: 'Cartola', price: 25.00, ingredients: 'Banana, açúcar, canela e queijo manteiga', imageUrl: 'https://images.unsplash.com/photo-1511688858354-c72582447949?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
  { id: 'p11', name: 'Romeu e Julieta', price: 29.90, ingredients: 'Queijo mussarela com goiabada cremosa', imageUrl: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&q=80&w=400', category: 'PIZZA' },
];

export const MENU_COMBOS: Product[] = [
  { id: 'c1', name: '2 Pizzas + Batata + Kuat 2L', price: 69.90, ingredients: 'Combo Família', imageUrl: 'https://images.unsplash.com/photo-1528137858148-d0180c574559?auto=format&fit=crop&q=80&w=400', category: 'COMBO' },
  { id: 'c2', name: '1 Pizza + Batata + Guaraná 1L', price: 39.90, ingredients: 'Combo Individual/Casal', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', category: 'COMBO' },
];

export const MENU_BEVERAGES: Product[] = [
  { id: 'b1', name: 'Coca-Cola 2L', price: 15.00, imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400', category: 'BEVERAGE' },
  { id: 'b2', name: 'Guaraná Antarctica 1L', price: 8.00, imageUrl: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&q=80&w=400', category: 'BEVERAGE' },
  { id: 'b3', name: 'Kuat 2L', price: 12.00, imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=400', category: 'BEVERAGE' },
  { id: 'b4', name: 'Pepsi Black 1L', price: 8.00, imageUrl: 'https://images.unsplash.com/photo-1553456523-2613d77ad9fd?auto=format&fit=crop&q=80&w=400', category: 'BEVERAGE' },
];