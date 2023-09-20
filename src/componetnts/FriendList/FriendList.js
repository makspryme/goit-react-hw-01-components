import css from 'componetnts/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.item} key={id}>
            <span className={isOnline ? css.online : css.offline}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
