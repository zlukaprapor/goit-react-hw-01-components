import PropTypes from "prop-types";
import { Item, Label } from "./Statistics.styled";
const Stat = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Label>{percentage}</Label>
    </Item>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stat;
