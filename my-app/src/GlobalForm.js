import React, { useState } from "react";
import Expenselist from "./Expenselist";

const GlobalForm = () => {
  const [income, setincome] = useState([
    {
      incometex: "",
      incomeamount: "",
    },
  ]);
  const [icome1, setincome1] = useState([]);

  const handchangeincome = (event) => {
    const { name, value } = event.target;
    setincome({ ...income, [name]: value });
  };

  const handlesubmitincome = (e) => {
    e.preventDefault();

    
    const obj = {
      id: Date.now(),
      incomes: income.incometex,
      incomestamount: parseInt(income.incomeamount),
    };
    setincome1([...icome1, obj]);
    setincome({
      incometex: "",
      incomeamount: "",
    });
  };

  const [expense, setexpense] = useState([
    {
      expensetex: "",
      expenseamount: "",
    },
  ]);
  const [expense1, setexpnse] = useState([]);

  const handchangeincome1 = (event) => {
    const { name, value } = event.target;
    setexpense({ ...expense, [name]: value });
  };

  const handlesubmitincome1 = (e) => {
    e.preventDefault();



    const obj1 = {
      id: Date.now(),
      expnses2: expense.expensetex,
      expnsesamounts: parseInt(expense.expenseamount),
    };

    setexpnse([...expense1, obj1]);
    setexpense({
      expensetex: "",
      expenseamount: "",
    });
  };

  const DeleteIncome = (id) => {
    const filterincome = icome1.filter((data) => {
      return data.id !== id;
    });
    setincome1(filterincome);
  };

  const DeleteExpense = (id) => {
    const filterincome1 = expense1.filter((data1) => {
      return data1.id !== id;
    });
    setexpnse(filterincome1);
  };

  const EditIncome=(key,data1,data2)=>{
   const  obj2={incometex:data1,incomeamount:data2}
    setincome(obj2)

  }
  const EditExpense=(key2)=>{


  }
  return (
    <>
      <div>
        <form onSubmit={handlesubmitincome}>
          <input
            type="text"
            name="incometex"
            value={income.incometex}
            onChange={handchangeincome}
            placeholder="Enter your Amount Name"
          ></input>
          <br></br>

          <input
            type="number"
            name="incomeamount"
            value={income.incomeamount}
            onChange={handchangeincome}
            placeholder="Enter Amount "
          ></input>
          <br></br>
          <button type="submit">Add Income </button>
        </form>
        <br></br>
        <form onSubmit={handlesubmitincome1}>
          <input
            type="text"
            name="expensetex"
            value={expense.expensetex}
            onChange={handchangeincome1}
            placeholder="Enter your Expense Name"
          ></input>
          <br></br>

          <input
            type="number"
            name="expenseamount"
            value={expense.expenseamount}
            onChange={handchangeincome1}
            placeholder="Enter Expense Amount "
          ></input>
          <br></br>
          <button type="submit">Add Expense </button>
        </form>
      </div>

      <Expenselist
        incomes={icome1}
        expenses={expense1}
        deleteincome={DeleteIncome}
        deleteexpense={DeleteExpense}
        editincome={EditIncome}
        editexpense={EditExpense}
      />
    </>
  );
};

export default GlobalForm;
