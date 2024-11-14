import React from 'react';

function FormattedMoneyFunc(props) {

 const format = (amount) => {
    return parseFloat(amount).toFixed(2);
  }

  return (
        <span>{format(props.value)}</span>
  )
}

export default FormattedMoneyFunc
