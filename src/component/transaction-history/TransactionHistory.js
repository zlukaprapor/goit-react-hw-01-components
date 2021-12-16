import Transaction from "./Transaction";
import PropTypes from "prop-types";
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

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
