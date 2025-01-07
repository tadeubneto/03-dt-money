import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$1.000,00
                </PriceHighLight>
              </td>
              <td>venda</td>
              <td>07/01/2024</td>
            </tr>
            <tr>
              <td width="50%">Ifood</td>
              <td>
                <PriceHighLight variant="outcome">
                  -R$50,00
                </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>05/01/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
