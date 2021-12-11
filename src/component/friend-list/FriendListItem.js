import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={isOnline ? "status" : "ofstatus"}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.symbol.isRequired,
};

export default FriendListItem;
