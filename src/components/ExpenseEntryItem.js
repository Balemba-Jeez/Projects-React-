import React from 'react'
import './ExpenseEntryItem.css'
import styles from './ExpenseEntryItem.module.css'

class ExpenseEntryItem extends React.Component{
    render(){
        var itemStyle = {color: "brown", fontSize: '14px', fontWeight: '100'};
        return(
            <div className={styles.itemStyle}>
                <div><b>Item:</b> <em>Mango Juice</em></div>
                <div><b>Amount:</b> <em>30.00</em></div>
                <div><b>Spend Date:</b> <em>2020-10-10</em></div>
                <div><b>Catergory:</b> <em>Food</em></div>
            </div>
        );
    }
}

export default ExpenseEntryItem;