import FriendListItem from "./FriendListItem";

const FriendList = ({ frends }) => {
  return (
    <ul className="friend-list">
      {frends.map((frend) => (
        <FriendListItem
          key={frend.id}
          avatar={frend.avatar}
          name={frend.name}
          isOnline={frend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
