
import './App.css';
import FriendList from './friendList/FriendList';
import Profile from './profile/Profile';
import TransactionHistory from './transaction/TransactionHistory';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </>
  );
}

export default App;