import Button from "./button";
export default function FriendList({ friends, onSelectFriend, selectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <List
          onSelectFriend={onSelectFriend}
          selectFriend={selectFriend}
          friend={friend}
          key={crypto.randomUUID()}
        />
      ))}
    </ul>
  );
}

function List({ friend, onSelectFriend, selectFriend }) {
  const isSelected = selectFriend?.name === friend.name;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
