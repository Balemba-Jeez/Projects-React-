import React from "react";
import './ExpenseEntryItemFunct.css';
import FormattedMoneyFunc from "./FormattedMoneyFunc";
import FormattedDateFunc from "./FormattedDateFunc";




function ExpenseEntryItemFunct(props) {
    return (
                <div>
                    <div><b>Item:</b> <em>Mango Juice</em></div>
                    <div><b>Amount:</b> 
                    <em>
                        <FormattedMoneyFunc value = {props.item.amount}/>
                    </em>
                    </div>
                    <div><b>Spend Date:</b> 
                    <em>
                        <FormattedDateFunc value = {props.item.spendDate}/>
                    </em>
                    </div>
                    <div><b>Catergory:</b> <em>Food</em></div>
                </div>
    )
}

export default ExpenseEntryItemFunct;