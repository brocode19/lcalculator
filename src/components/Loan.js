import React from 'react'

function Loan(props) {

  console.log(typeof(props.installment) );
  return (
    <>

    <tr>

      <td>{props.id + 1}</td>

<td>{props.installment.toFixed(2)}</td>
<td>{props.principal.toFixed(2)}</td>
<td>{props.interest.toFixed(2)}</td>
<td>{props.totalInterest.toFixed(2)}</td>
<td>{props.remainingBalance.toFixed(2)}</td>



    </tr>


   </>
  )
}

export default Loan