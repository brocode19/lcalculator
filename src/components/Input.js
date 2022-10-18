
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import LoanJS from 'loanjs'

function Input(props) {

    const submit = (event) =>{

        const loanValues = new LoanJS.Loan(
          props.data.LoanAmount, // amount
          props.data.Months,   // installments number
          props.data.Interst,    // interest rate
          false, // constant
        );
            props.setTotals(loanValues)
            props.setMonthlyPayment(loanValues.installments[0].installment)
  
        props.setInstallments(loanValues.installments);
        props.setInterestGraph({
          labels: ['principal', 'interest'],
          datasets: [
            {
              label: '# of Votes',
              data: [loanValues.capitalSum,loanValues.interestSum],
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
        })
  
        console.log(loanValues);
        
        
  
          event.preventDefault()
      }
  
      const clear = (e) =>{
  
        e.preventDefault()
  
        props.setTotals({})
        props.setMonthlyPayment('')
        props.setInstallments([]);
        props.setData({
          LoanAmount:'',
          Interst:'',
          Months:'',
        })
  
        props.setInterestGraph({
          labels: ['principal', 'interest'],
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
        })
  
      }
  
      const handleChange = (event) =>{
          const { name, value } = event.target;
  
          props.setData({
            ...props.data,
            [name]: value,
            
    
          });
  
      }
  return (
    <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Loan amount</Form.Label>
        <Form.Control
         type="text"
         placeholder="Loan amount"
         name='LoanAmount'
         value={props.data.LoanAmount}
         onChange={handleChange}
          />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Interest</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Interest"
         name='Interst'
         value={props.data.Interst}
         onChange={handleChange}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Term(months)</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Months" 
         name='Months'
         value={props.data.Months}
         onChange={handleChange}
         />
      </Form.Group>

      <div className='loan-buttons'>
      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick={clear} variant="warning" type="submit">
        Reset
      </Button>
      </div>


    </Form>
    </>
  )
}

export default Input