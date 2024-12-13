import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  //console.log(userInput);
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const priceChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredPrice: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      price: userInput.enteredPrice,
      date: new Date(userInput.enteredDate),
    };
    //console.log(expenseData);
    setUserInput({
        enteredTitle: "",
        enteredPrice: "",
        enteredDate: "",
      });
  };
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredPrice, setEnteredPrice] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");

  //const titleChangeHandler = (event) => {
  //  setEnteredTitle(event.target.value);
  //};
  //const priceChangeHandler = (event) => {
  //  setEnteredPrice(event.target.value);
  //};
  //const dateChangeHandler = (event) => {
  //  setEnteredDate(event.target.value);
  //};
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
            value={userInput.enteredPrice}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2024-11-12"
            max="2026-01-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
//{} [] ({})
