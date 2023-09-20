import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from 'JSON/user';
import data from 'JSON/data';
import friends from 'JSON/friends';
import transactions from 'JSON/transactions';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}
