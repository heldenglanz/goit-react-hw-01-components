import Statistics from "./Statistics";
import PropTypes from "prop-types";

function StatisticsList ({title, stats}){
    const title = true;
        return (
        <section class="statistics">
    {title && <h2 class="title">{title}</h2>}
  <ul class="stat-list">
        {stats.map(statItem =>(
    <li class="item" key={statItem.id}>
<Statistics
     label={statItem.label}
     percentage={statItem.percentage}
/>
    </li>
        ))}
  </ul>
</section>
        );
}

StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}


export default StatisticsList;