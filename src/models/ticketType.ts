interface PriceType {
  full: number;
  discount: number;
}
interface RatingType {
  reviewsCount: number;
  value: number;
}
export interface TicketType {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  price: PriceType;
  rating: RatingType;
  createdAt: string;
  updatedAt: string;
}
