import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'
// import s from '../FriendList.module.css'
function FriendList({ friends }) {

    return (
        <ul className="friend-list">
            {friends.map(friend => {
                return (
                    <li className="item" key={friend.id}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                )
            })}

        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
        }).isRequired).isRequired
}


export default FriendList