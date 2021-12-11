import Stat from "./Stat.js";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      {stats.map((stat) => (
        <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </section>
  );
};
export default Statistics;
