// import PropTypes from "prop-types";
import data from '../data/data.json'
import user from '../data/user.json'
import friends from '../data/friends'
import transactions from '../data/transactions'
import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';


export function App() {
    // console.log('fff')
    // console.log(this.state, 'kika')
    // console.log(this.props)
    return (
        <>
            <Profile username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={data} />
            <Statistics stats={data} />

            <FriendList friends={friends} />

            <TransactionHistory items={transactions} />;
        </>
    )
};
