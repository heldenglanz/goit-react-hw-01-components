// import PropTypes from "prop-types";
import data from '../data/data'
import user from '../data/user'
import Profile from "./Profile";
import StatisticsList from './Statistics';

export function  App (){

   <>
   
<Profile username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />

  <StatisticsList title="Upload stats"
  stats={data}
    />

    </>

};
