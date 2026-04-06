import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ocean Salmon Feast',
    description: 'Premium dry kibble made with real wild-caught salmon and sweet potatoes.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    category: 'dry',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Tender Chicken Paté',
    description: 'Smooth and savory wet food paté with farm-raised chicken and vitamins.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1623366302587-bca323d4638a?auto=format&fit=crop&q=80&w=800',
    category: 'wet',
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Crunchy Tuna Bites',
    description: 'Irresistible crunchy treats with a soft tuna center for your feline friend.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800',
    category: 'treats',
    rating: 4.7,
    reviews: 256
  },
  {
    id: '4',
    name: 'Indoor Health Turkey',
    description: 'Specially formulated dry food for indoor cats to maintain a healthy weight.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    category: 'dry',
    rating: 4.6,
    reviews: 112
  },
  {
    id: '5',
    name: 'Seafood Medley Chunks',
    description: 'Juicy chunks of tuna, shrimp, and salmon in a rich, savory gravy.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800',
    category: 'wet',
    rating: 4.8,
    reviews: 167
  },
  {
    id: '6',
    name: 'Catnip Dental Chews',
    description: 'Helps clean teeth and freshen breath while providing a burst of catnip joy.',
    price: 8.49,
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800',
    category: 'treats',
    rating: 4.5,
    reviews: 342
  }
];
