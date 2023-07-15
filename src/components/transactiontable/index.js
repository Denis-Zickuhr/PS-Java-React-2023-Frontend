import { Grid, Pagination, Table } from "semantic-ui-react";
import {
  PaginationContainer,
  StyledTable,
  TotalValueSegment,
  AppContainer,
  ValueSegment,
} from "./style";

const App = ({ data, activePage, setActivePage, itemsPerPage, totalValue }) => {
  const tipoColors = {
    SAQUE: "red",
    TRANSFERENCIA: "yellow",
    DEPOSITO: "green",
  };

  const handlePageChange = (event, { activePage }) => {
    setActivePage(activePage);
  };

  const getCurrentData = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data?.slice(startIndex, endIndex);

    const emptyRow = {
      dataTransferencia: "-",
      valor: "-",
      tipo: "-",
      nomeOperadorTransacao: "-",
      conta: { nomeResponsavel: "-" },
    };

    while (currentData.length < itemsPerPage) {
      currentData.push(emptyRow);
    }

    return currentData;
  };

  const getValueAtCurrentData = () => {
    const totalValue = data?.reduce((total, item) => total + item.valor, 0);
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalValue);
  };

  const formatDateTime = (date) => {
    if (date === "-") {
      return "-";
    }

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
  };

  const getValue = (value) => {
    if (value === "-") {
      return "-";
    }

    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    const valueColor = value < 0 ? "red" : "green";

    return <span style={{ color: valueColor }}>{formattedValue}</span>;
  };

  if (!data) {
    return <>Pesquise para obter resultados</>;
  }

  if (data.length === 0) {
    return <>A pesquisa não retornou resultados</>;
  }

  return (
    <AppContainer>
      <Grid columns={1}>
        <Grid.Column>
          <TotalValueSegment>
            <ValueSegment>
              <strong>
                Saldo total:{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalValue)}
              </strong>
            </ValueSegment>
            <ValueSegment>
              <strong>Saldo total no período: {getValueAtCurrentData()}</strong>
            </ValueSegment>
          </TotalValueSegment>
        </Grid.Column>
      </Grid>
      <StyledTable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Data de Transferência</Table.HeaderCell>
            <Table.HeaderCell>Valor</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
            <Table.HeaderCell>Nome do Operador</Table.HeaderCell>
            <Table.HeaderCell>Titular da Conta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {getCurrentData().map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{formatDateTime(item.dataTransferencia)}</Table.Cell>
              <Table.Cell>{getValue(item.valor)}</Table.Cell>
              <Table.Cell>
                <span style={{ color: tipoColors[item.tipo] || "white" }}>
                  {item.tipo}
                </span>
              </Table.Cell>
              <Table.Cell>
                {item.nomeOperadorTransacao ?? "Não informado"}
              </Table.Cell>
              <Table.Cell>{item.conta.nomeResponsavel}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </StyledTable>
      <Grid columns={1}>
        <PaginationContainer>
          <Pagination
            activePage={activePage}
            onPageChange={handlePageChange}
            totalPages={Math.ceil(data.length / itemsPerPage)}
          />
        </PaginationContainer>
      </Grid>
    </AppContainer>
  );
};

export default App;
