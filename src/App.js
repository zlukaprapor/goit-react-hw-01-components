import FriendListItem from "./component/friend-list/FriendListItem";
import frends from "./component/friend-list/friends.json";

function App() {
  return (
    <div>
      {frends.map((frend) => (
        <FriendListItem
          key={frend.id}
          avatar={frend.avatar}
          name={frend.name}
          isOnline={frend.isOnline}
        />
      ))}
    </div>
  );
}

export default App;
