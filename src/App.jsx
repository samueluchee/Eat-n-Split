import { useState } from "react";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/fornAddFriend";
import Button from "./Components/button";
import FormSplitBill from "./Components/formSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showFriend, setShowFriend] = useState(false);
  const [addFriend, setAddFriend] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleChange() {
    setShowFriend((cur) => !cur);
  }

  function handleAddFriends(friend) {
    setAddFriend((cur) => [...cur, friend]);
    setShowFriend(false);
  }

  function handleSelect(friend) {
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowFriend(false);
  }

  function handleSplitBill(value) {
    setAddFriend((curFriends) =>
      curFriends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={addFriend}
          onSelectFriend={handleSelect}
          selectFriend={selectFriend}
        />

        {showFriend && <FormAddFriend onAddFriends={handleAddFriends} />}

        <Button onClick={handleChange}>
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectFriend && (
        <FormSplitBill
          selectFriend={selectFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
