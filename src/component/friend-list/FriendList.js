import FriendListItem from "./FriendListItem";
import { Profile, List } from "./FriendList.styled";
import frends from "./friends.json";
const FriendList = () => {
  return (
    <Profile>
      <p>Задание 1</p>
      <List>
        {frends.map((frend) => (
          <FriendListItem
            key={frend.id}
            avatar={frend.avatar}
            name={frend.name}
            isOnline={frend.isOnline}
          />
        ))}
      </List>
    </Profile>
  );
};

export default FriendList;
