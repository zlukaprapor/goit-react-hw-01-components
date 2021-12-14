import PropTypes from "prop-types";

import {
  Profile,
  Description,
  Avatar,
  Name,
  Tag,
  Stats,
  Marker,
  Label,
} from "./Profile.styled";

const SocialProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <p>Задание 2</p>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <Stats>
        <Marker>
          <Label>Followers</Label>
          <Label>{stats.followers}</Label>
        </Marker>
        <Marker>
          <Label>Views</Label>
          <Label>{stats.views}</Label>
        </Marker>
        <Marker>
          <Label>Likes</Label>
          <Label>{stats.likes}</Label>
        </Marker>
      </Stats>
    </Profile>
  );
};

SocialProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default SocialProfile;
