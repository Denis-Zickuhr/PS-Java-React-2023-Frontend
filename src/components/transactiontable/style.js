import styled from "styled-components";
import { Grid, Segment, Table } from "semantic-ui-react";

export const AppContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

const themeColor = "#535bf2";

export const PaginationContainer = styled(Grid.Column)`
  text-align: center;

  .ui.pagination.menu {
    border: 1px solid #fff;
    padding: 10px;

    .item {
      border: none;
      cursor: pointer;
      background-color: transparent;
      font-size: 16px;
      padding: 5px 10px;
      margin: 0 2px;
      color: ${themeColor};

      &:not(.active):hover {
        background-color: rgba(83, 91, 242, 0.5);
        color: #fff;
        border-radius: 10px;
      }

      &.active {
        background-color: ${themeColor};
        color: #fff;
        border-radius: 10px;
      }
    }
    .icon.item {
      margin: 0;
      padding: 0;
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .ui.pagination.menu {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon.item {
        display: none;
      }
    }
  }
`;

export const TotalValueSegment = styled(Segment)`
  text-align: center;
  border: 1px solid #fff;
  padding: 10px;
  background-color: ${themeColor};

  display: flex;
  align-items: center;

  strong {
    font-size: 18px;
    color: #fff;
  }
`;

export const StyledTable = styled(Table)`
  width: 100%;
  border: 1px solid #fff;
  background-color: #333;
  color: #fff;

  th {
    background-color: #555;
    border: 1px solid #444;
  }

  td {
    font-size: 16px;
    border: 1px solid #444;
  }

  .ui.celled.table th,
  .ui.celled.table td {
    padding: 10px;
    text-align: center;
  }

  .ui.celled.table th:last-child,
  .ui.celled.table td:last-child {
    border-right: none;
  }

  .ui.celled.table tbody tr {
    border: 1px solid #444;
  }
`;

export const ValueSegment = styled.p`
  margin-left: 30px;
` 
