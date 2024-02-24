"use client";

import Image from "next/image";
import pinIcon from "../../assets/images/searchInput/pinIcon.svg";
import searchIcon from "../../assets/images/searchInput/magnifierIcon.svg";
import { SearchInputProps } from "./searchInput.types";
import styles from "./searchInput.module.css";

const SearchInput: React.FC<SearchInputProps> = ({
  placeHolder,
  search,
  setSearch,
  handleSearch,
}) => {
  return (
    <div className={styles.container}>
      <form
        className={styles.searchInput}
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <div className={styles.searchInput__inputContainer}>
          <div className={styles.searchInput__inputContainer__pin}>
            <Image alt="pin de localização" src={pinIcon} />
          </div>
          <input
            data-testid="search-input"
            className={styles.searchInput__inputContainer__input}
            placeholder={placeHolder}
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
        <button className={styles.searchInput__btn}>
          <Image alt="lupa" src={searchIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
