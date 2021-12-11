import FriendList from "./component/friend-list/FriendList";
import Profile from "./component/social-profile/Profile";
import Statistics from "./component/statistics/Statistics";
import frends from "./component/friend-list/friends.json";
import user from "./component/social-profile/user.json";

function App() {
  return (
    <div>
      <Statistics />

      <FriendList frends={frends} />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
