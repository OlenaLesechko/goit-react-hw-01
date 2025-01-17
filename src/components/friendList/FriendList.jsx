import css from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem';

export const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;