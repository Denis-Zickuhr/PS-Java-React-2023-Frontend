import React, { useState } from "react";
import api from "../../services/api";
import SearchForm from "../../components/searchform";
import TransactionTable from "../../components/transactiontable";
import { Container } from "./styles";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Main = () => {
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [data, setData] = useState(false);
  const [filters, setFilters] = useState({
    startDateTime: "",
    endDateTime: "",
    nomeResponsavel: "",
  });
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    if (!totalValue) {
      try {
        const allTransactions = await api.get("/transferencias/count");
        setTotalValue(allTransactions.data);
      } catch (Error) {
        toast.error(Error.message);
      }
    }
    try {
      const response = await api.get("/transferencias/between-dates", {
        params: {
          ...filters,
        },
      });
      setData(response.data);
    } catch (Error) {
      toast.error(Error.message);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <SearchForm
        fetchData={fetchData}
        filters={filters}
        setFilters={setFilters}
      />
      <TransactionTable
        data={data}
        activePage={activePage}
        setActivePage={setActivePage}
        itemsPerPage={itemsPerPage}
        totalValue={totalValue}
      />
    </Container>
  );
};
