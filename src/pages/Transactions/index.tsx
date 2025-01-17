
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { DateFormatter, PriceFormatter } from "../../utils/formatter";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";


export function Transactions() {

  const { transactions } = useContext(TransactionsContext);
  
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighLight variant={transaction.type}>                  
                  {transaction.type === 'outcome' && '- ' }
                  {PriceFormatter.format(transaction.price)}</PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{DateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
              )
            })}
                       
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
