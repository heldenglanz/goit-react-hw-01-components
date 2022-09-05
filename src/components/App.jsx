// import PropTypes from "prop-types";
import user from '../data/user'
import Profile from "./Profile";


export function  App (){
  return (
    <>
<Profile username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    </>
  );
};
