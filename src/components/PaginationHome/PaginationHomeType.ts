export interface PaginationHomeProps {
  page: number;
  setPage: (value: number) => void;
  totalOfItems: number;
  itemsPerPage: number;
}
