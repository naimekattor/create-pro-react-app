export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'dry' | 'wet' | 'treats';
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}
