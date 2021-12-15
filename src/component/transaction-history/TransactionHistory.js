import Transaction from "./Transaction";
import { History, Table, Head, Position, Title } from "./Transaction.styled";
const TransactionHistory = ({ items }) => {
  return (
    <History>
      <Head>
        <Position>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </Position>
      </Head>

      <Table>
        {items.map((el) => (
          <Transaction
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </Table>
    </History>
  );
};

export default TransactionHistory;
