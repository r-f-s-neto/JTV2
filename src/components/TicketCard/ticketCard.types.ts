export interface TicketCardProps {
  name: string;
  id: string;
  location: string;
  image: string;
  description: string;
  priceFull: number | null;
  priceDiscount: number | null;
  ratingReviewsCount: number | null;
  ratingValue: number | null;
  handleClick: (id: string) => void;
}
