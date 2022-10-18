import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import Input from './Input'
import Loan from "./Loan";

function Calculator() {

  const pieOptions = {

    maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Interest Graph',
          align: 'center'
        },
      },
    };

    const [data, setData] = useState({
        LoanAmount:'',
        Interst:'',
        Months:''
      });


      const [installments, setInstallments] = useState([]);
    
      const [totals, setTotals] = useState({})
      const [monthlyPayment, setMonthlyPayment] = useState('');

      const [interestGraph, setInterestGraph] = useState({

        labels: ['Interest', 'Principle'],
        datasets: [
          {
            label: '# of Votes',
            data: [2,10],
            backgroundColor: [
      
              'red',
              'blue',
              // '#41f1b6'
              // 'rgba(255, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
    
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
    
            ],
            borderWidth: 0.6,
          },
        ],
      });

      return (

        <>

           <div className='container loanContainer'>

            
            <div className="container row">
            <h1>Tinashe's Loan Calculator</h1>
                <div className="col-4">
                <div className="data-input container">
              <Input
              data={data}
              setData={setData}
              setInstallments={setInstallments}
              setInterestGraph={setInterestGraph}
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
                <div className="col-2">
                  <div className="PieGraph container">
                  <Pie data={interestGraph} options={pieOptions}/>
                  </div>
                  
                </div>
            </div>

            <div className="container loanAdvice">
            <h3>Loans</h3>

            <p>While shopping for any loan, it’s a good idea to use a loan calculator. A calculator can help you narrow your search for a home or car by showing you how much you can afford to pay each month. It can help you compare loan costs and see how differences in interest rates can affect your payments, especially with mortgages. The right loan calculator will show you the total cost of a loan, expressed as the annual percentage rate, or APR. Loan calculators can answer a lot of questions and help you make good financial decisions.</p>
            </div>



            <div className="row">

              {installments.length > 0 && <div className="container table">

<table class="projects-table">         
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
</table>
    
</div> }

            </div>

           </div>
        
        </>

       )
}

export default Calculator