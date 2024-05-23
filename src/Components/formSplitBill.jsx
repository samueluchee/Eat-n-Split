import { useState } from "react";
import Button from "./button";
export default function FormSplitBill({ selectFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const paidByFriend = bill ? bill - expense : "";
  const [payment, setPayment] = useState("user");

  //   function billValue() {
  //     const billValue = bill - expense;
  //     return billValue;
  //   }

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !expense) return;

    onSplitBill(payment === "user" ? paidByFriend : -expense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectFriend.name}</h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍🏼‍♂️Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>👩🏽‍🤝‍🧑🏽 {selectFriend.name} expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑Who's Paying</label>
      <select value={payment} onChange={(e) => setPayment(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
