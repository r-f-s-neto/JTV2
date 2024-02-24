export interface SelectPagesProps {
  totalOfItems: number;
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
}
