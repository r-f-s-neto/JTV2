"use client";

import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { filterTickets } from "@/services/filterTickets/filterTickets";
import AsideFilter from "@/components/AsideFilter/AsideFilter";
import { listAllTickets } from "@/services/listAllTickets/listAllTickets";
import TicketsList from "@/components/TicketsList";
import PaginationHome from "@/components/PaginationHome";
import { listPageTickets } from "@/services/listPageTickets/listPageTickets";
import LoadingProducts from "@/components/LoadingProducts/LoadingProducts";
import NoData from "@/components/NoData/NoData";
import { toast } from "react-toastify";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFilterTicketsConnectionError, setIsFilterTicketsConnectionError] =
    useState(false);
  const [isListAllTicketsConnectionError, setIsListAllTicketsConnectionError] =
    useState(false);
  const [
    isListPageTicketsConnectionError,
    setIsListPageTicketsConnectionError,
  ] = useState(false);
  const [ticketsToRender, setTicketsToRender] = useState<any[]>([]);
  const [totalOfTickets, setTotalOfTickets] = useState(0);
  const [page, setPage] = useState(1);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [allTicketsFromFilter, setAllTicketsFromFilter] = useState([]);

  const handleSearch = async () => {
    if (search) {
      setIsSearchActive(true);
      setPage(1);
      let tickets = [];
      let totalOfItems = 0;

      const allData = await filterTickets(
        search,
        setLoading,
        setIsFilterTicketsConnectionError,
        "",
        ""
      );

      if (allData?.length) {
        tickets = allData.filter((ticket: any) => {
          return (
            ticket.name.toLowerCase().includes(search.toLowerCase()) ||
            ticket.location.toLowerCase().includes(search.toLowerCase())
          );
        });
        totalOfItems = tickets.length;
        setAllTicketsFromFilter(tickets);
      }

      setTotalOfTickets(totalOfItems);
      updateTicketsOnSearchMode(1, tickets, totalOfItems);
    } else {
      setIsSearchActive(false);
      setPage(1);
      setTotalOfTickets(0);
    }
  };

  const updateTickets = async () => {
    let tickets = [];
    let total = 0;
    const allTicketsdata = await listAllTickets(
      setLoading,
      setIsListAllTicketsConnectionError
    );
    if (allTicketsdata?.length) {
      total = allTicketsdata.length;
    }

    const pageTicketsData = await listPageTickets(
      setLoading,
      setIsListPageTicketsConnectionError,
      page,
      6
    );
    if (pageTicketsData?.length) {
      tickets = pageTicketsData;
    }
    setTotalOfTickets(total);
    setTicketsToRender(tickets);
  };

  const updateTicketsOnSearchMode = async (
    page: number,
    allTicketsFromFilter: any[],
    totalOfTickets: number
  ) => {
    let tickets: any[] = [];

    if (allTicketsFromFilter?.length) {
      const startIndex = (page - 1) * 6;
      const endIndex = Math.min(startIndex + 6, totalOfTickets);
      tickets = allTicketsFromFilter.slice(startIndex, endIndex);
    }
    setTicketsToRender(tickets);
  };

  useEffect(() => {
    if (isSearchActive) {
      updateTicketsOnSearchMode(page, allTicketsFromFilter, totalOfTickets);
    } else {
      updateTickets();
    }
  }, [page, isSearchActive]);

  useEffect(() => {
    if (
      isFilterTicketsConnectionError ||
      isListAllTicketsConnectionError ||
      isListPageTicketsConnectionError
    ) {
      toast.error("Ocorreu um erro inesperado, tente novamente mais tarde!");
    }
  }, [
    isFilterTicketsConnectionError,
    isListAllTicketsConnectionError,
    isListPageTicketsConnectionError,
  ]);

  return (
    <div className={styles.home}>
      <SearchInput
        placeHolder="Busque por atração"
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <main className={styles.home__main}>
        <div className={styles.home__main__aside}>
          <AsideFilter />
        </div>
        <div className={styles.home__main__content}>
          {loading ? (
            <LoadingProducts />
          ) : ticketsToRender?.length ? (
            <>
              <TicketsList ticketsToRender={ticketsToRender} />
              <PaginationHome
                totalOfItems={totalOfTickets ? totalOfTickets : 0}
                itemsPerPage={6}
                page={page}
                setPage={setPage}
              />
            </>
          ) : (
            <NoData text="Nenhum Ingresso Encontrado" />
          )}
        </div>
      </main>
    </div>
  );
}
