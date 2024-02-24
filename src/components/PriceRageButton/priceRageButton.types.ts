export interface PriceFilterProps {
  initialPrice: number;
  finalPrice: number;
  isActive: boolean;
  id: string;
  handleClick: (id: string) => void;
}
