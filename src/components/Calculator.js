import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import Input from './Input'
import Loan from "./Loan";

function Calculator() {

    const pieOptions = {

        maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Projects by Priority',
              align: 'start'
            },
          },
        };

    const [data, setData] = useState({
        LoanAmount:'',
        Interst:'',
        Months:''
      });
    
    
      const [interestGraph, setInterestGraph] = useState({
        labels: ['interest', 'principal'],
        datasets: [
          {
            label: '# of Votes',
            data: [10,1],
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
            borderWidth: 1,
          },
        ],
      });
    
      const [installments, setInstallments] = useState([]);
    
      const [totals, setTotals] = useState({})
      const [monthlyPayment, setMonthlyPayment] = useState('');

      return (

        <>
           <div className="container col-4 data-input">
              <Input
              data={data}
              setData={setData}
              setInstallments={setInstallments}
              setInterestGraph={setInterestGraph}
              setTotals={setTotals}
              setMonthlyPayment={setMonthlyPayment}
              />
            </div>
        </>

    //     <div className='container-fluid LoanItem'>
    //       <div className="container">
    //       <div className="row top-section">

    //         <div className="container col-8 total-info justify-content-center align-items-center">
    
    //           <div className="row container">
    //           <div className="total container ">
    
    //             <div className="container">
    //             <h3 className="text-center monthly-payment">Your Monthly Payments</h3>
    
    // <h4 className="text-center">${monthlyPayment}</h4>
    
    // <div className="row container loan-total">
    //   <div className="col-6 text-center">Total Principle</div>
    //   <div className="col-6 text-center">${totals.capitalSum}</div>
    //   <div className="col-6 text-center">Total Interest</div>
    //   <div className="col-6 text-center">${totals.interestSum}</div>
    //   <div className="col-6 text-center">Total Amount</div>
    //   <div className="col-6 text-center">${totals.sum}</div>
    // </div>
    
    //             </div>
    
    
    //           </div>
    //           </div>
    
    //           <div className="row container">
    //           <div className='pie-graph '>
    //           <Pie data={interestGraph} options={pieOptions} />
    //           </div>
    //           </div>
    
    
    //         </div>
    //       </div>
    //       <div className="container row bottom-section">
    //         {installments.length > 0 && <table class="projects-table">         
    //   <thead>
    //     <tr>
    //       <th>Month</th>
    //       <th>Payment</th>
    //       <th>Principal</th>
    //       <th>Interest</th>
    //       <th>Total Interest</th>
    //       <th>Remaining Balance</th>
    //     </tr>
    //   </thead>
    //   <tbody>
        
    //   {installments.map((loanItem, index) => {
    //         return (
    //           <Loan
    //             key={index}
    //             id={index}
    //             installment={loanItem.installment}
    //             principal={loanItem.capital}
    //             interest={loanItem.interest}
    //             totalInterest={loanItem.interestSum}
    //             remainingBalance={loanItem.remain}
    //           />
    //         );
    //       })}
    //   </tbody>
    // </table>}
    //         </div>
    //         </div>
    
    //       </div>
      )
}

export default Calculator