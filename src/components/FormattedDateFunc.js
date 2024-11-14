import React from 'react'

export default function FormattedDateFunc(props) {

    const format = (val) => {
        
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"]

        let parsed_date = new Date(val);

        let formatted_date = parsed_date.getDate() + " " + "-" + " " + months[parsed_date.getMonth()] + " " + "-" + parsed_date.getFullYear();

        return formatted_date;
    }

  return (
    <span>{format(props.value)}</span>
  )
}
