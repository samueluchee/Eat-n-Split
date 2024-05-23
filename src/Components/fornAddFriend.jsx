import { useState } from "react";
import Button from "./button";

export default function FormAddFriend({ onAddFriends }) {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName) return;

    const id = crypto.randomUUID();

    const newDetails = {
      name: friendName,
      id: id,
      image: `${friendImg}?=${id}`,
      balance: 0,
    };

    onAddFriends(newDetails);
    // console.log(newDetails);

    setFriendName("");
    setFriendImg("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏾‍🤝‍👨🏾Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => {
          setFriendName(e.target.value);
        }}
      />

      <label>🖼Image url</label>
      <input
        type="text"
        value={friendImg}
        onChange={(e) => {
          setFriendImg(e.target.value);
        }}
      />
      <Button>Add</Button>
    </form>
  );
}
