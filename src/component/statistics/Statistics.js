import Stat from "./Stat.js";
import PropTypes from "prop-types";
import { Container, Title, List } from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>Upload stats</Title>}
      <List>
        {stats.map((stat) => (
          <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
