import Stat from "./Stat.js";
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
export default Statistics;
