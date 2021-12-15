import PropTypes from "prop-types";
import { Elements, Element } from "./Transaction.styled";
const Transaction = ({ type, amount, currency }) => {
  return (
    <Elements>
      <Element>{type}</Element>
      <Element>{amount}</Element>
      <Element>{currency}</Element>
    </Elements>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
