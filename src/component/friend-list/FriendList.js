import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import { Profile, List } from "./FriendList.styled";
const FriendList = ({ frends }) => {
  return (
    <Profile>
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

FriendList.propTypes = {
  frends: PropTypes.array.isRequired,
};

export default FriendList;
