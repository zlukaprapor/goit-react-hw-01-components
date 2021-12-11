import FriendList from "./component/friend-list/FriendList";
import frends from "./component/friend-list/friends.json";

function App() {
  return (
    <div>
      <FriendList frends={frends} />
    </div>
  );
}

export default App;
