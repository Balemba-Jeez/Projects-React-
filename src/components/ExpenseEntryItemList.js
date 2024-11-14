import React from "react";
import './ExpenseEntryItemList.css'

class ExpenseEntryItemList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const lists = this.props.items.map((item) => 
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{new Date(item.spendDate).toString()}</td>
                <td>{item.category}</td>
            </tr>
            )

      return (
        <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
      )  
        
    }
}

export default ExpenseEntryItemList;