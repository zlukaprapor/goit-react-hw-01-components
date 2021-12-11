import FriendList from "./component/friend-list/FriendList";
import Profile from "./component/social-profile/Profile";
import Statistics from "./component/statistics/Statistics";
import TransactionHistory from "./component/transaction-history/TransactionHistory";
import frends from "./component/friend-list/friends.json";
import user from "./component/social-profile/user.json";
import data from "./component/statistics/data.json";
import transactions from "./component/transaction-history/transactions.json";
function App() {
  return (
    <div>
      <FriendList frends={frends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
