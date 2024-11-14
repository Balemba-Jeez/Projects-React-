import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloWorld from './components/HelloWorld';
// import ExpenseEntryItem from './components/ExpenseEntryItem';
import ExpenseEntryItemFunct from './components/ExpenseEntryItemFunct';

import { items } from "./components/Data";
import ExpenseEntryItemList from './components/ExpenseEntryItemList';

const name = "Mango Juice"
const amount = 30.00
const spendDate = new Date()
const catergory = "Food"
const item = {
  id : 1,
  name : "Mango Juice",
  amount : 30.5,
  spendDate : new Date(),
  catergory : "Food",
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorld /> */}
    {/* <ExpenseEntryItem 

    item = {item}
    // name = {name} 
    // amount = {amount}
    //  spendDate = {spendDate} 
    //  catergory = {catergory}
     /> */}
    {/* <ExpenseEntryItemFunct item = {item}/> */}
    <ExpenseEntryItemList items = {items}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
