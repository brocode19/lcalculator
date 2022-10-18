import React, { useState } from "react";
import Input from './Input'
import Loan from "./Loan";

function Calculator() {

    const [data, setData] = useState({
        LoanAmount:'',
        Interst:'',
        Months:''
      });
        
      const [installments, setInstallments] = useState([]);
    
      const [totals, setTotals] = useState({})
      const [monthlyPayment, setMonthlyPayment] = useState('');

      return (

        <>

           <div className='container-fluid loanContainer'>
            <div className="container row">
                <div className="col-4">
                <div className="data-input container">
              <Input
              data={data}
              setData={setData}
              setInstallments={setInstallments}
            //   setInterestGraph={setInterestGraph}
              setTotals={setTotals}
              setMonthlyPayment={setMonthlyPayment}
              />
            </div>                 
                </div>
                <div className="col-6 d-flex " >
                <div className="totatPaymentContainer container">

                <h3 className="text-center monthly-payment">Your Monthly Payments</h3>
                 <h4 className="text-center">${monthlyPayment}</h4>

                 <div className="row">
                    <div className="col-6 totalNames">
                       <div className="col-6 text-center">Total Principle</div>
                       <div className="col-6 text-center">Total Principle</div>
                       <div className="col-6 text-center">Total Principle</div>


                    </div>
                    <div className="col-6 totalFigures">
                      <div className="col-6 text-center">${totals.capitalSum}</div>
                      <div className="col-6 text-center">${totals.interestSum}</div>
                      <div className="col-6 text-center">${totals.sum}</div>
                    </div>
                 </div>
                </div>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row">
                <div className="container">

                {installments.length > 0 && <table class="projects-table">         
      <thead>
        <tr>
          <th>Month</th>
          <th>Payment</th>
          <th>Principal</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Remaining Balance</th>
        </tr>
      </thead>
      <tbody>
        
      {installments.map((loanItem, index) => {
            return (
              <Loan
                key={index}
                id={index}
                installment={loanItem.installment}
                principal={loanItem.capital}
                interest={loanItem.interest}
                totalInterest={loanItem.interestSum}
                remainingBalance={loanItem.remain}
              />
            );
          })}
      </tbody>
    </table>}
                    
                </div>
            </div>

           </div>
        
        </>

       )
}

export default Calculator