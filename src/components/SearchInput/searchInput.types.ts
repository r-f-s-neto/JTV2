export interface SearchInputProps {
  placeHolder?: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<any>>;
  handleSearch: () => void;
}
