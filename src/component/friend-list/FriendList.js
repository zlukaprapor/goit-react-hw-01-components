import FriendListItem from "./FriendListItem";
import styles from "./FrendList.module.css";
const FriendList = ({ frends }) => {
  return (
    <div className={styles.profile}>
      <p>Задание 1</p>
      <ul className={styles.list}>
        {frends.map((frend) => (
          <FriendListItem
            key={frend.id}
            avatar={frend.avatar}
            name={frend.name}
            isOnline={frend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
