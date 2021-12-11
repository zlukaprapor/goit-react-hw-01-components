import PropTypes from "prop-types";

const Stat = ({ label, percentage }) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </ul>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  // key: PropTypes.string.isRequired,
};

export default Stat;
