import React from "react";

function Expenselist(props) {
  const {
    incomes,
    expenses,
    deleteincome,
    deleteexpense,
    editincome,
    editexpense,
  } = props;
  const totalncome = incomes.reduce(
    (acc, item) => (acc += item.incomestamount),
    0
  );
  const totalexpense = expenses.reduce(
    (acc, item1) => (acc += item1.expnsesamounts),
    0
  );
  const totalbalance = totalncome - totalexpense;
  console.log(totalbalance);

  return (
    <div>
      <h3>[INCOME LIST]</h3>
      {incomes.map((item) => {
        return (
          <>
            <p key={item.id}>
              {" "}
              <span>Income:</span>
              {item.incomes}
            </p>
            <p>
              {" "}
              <span>IncomeAmount:</span>+₹{item.incomestamount}
            </p>
            <button type="button" onClick={(e) => deleteincome(item.id)}>
              Delete Income
            </button>
            <button type="button" onClick={(e) => editincome(item.id, item.incomes,item.incomestamount)}>
              EditIncome
            </button>
          </>
        );
      })}
      <h3> [EXPENSE LIST]</h3>
      {expenses.map((item2) => {
        return (
          <>
            <p key={item2.id}>
              {" "}
              <span>EXPENSE:</span>
              {item2.expnses2}
            </p>
            <p>
              {" "}
              <span>EXPENSEAmount:</span>-₹{item2.expnsesamounts}
            </p>
            <button type="button" onClick={(e) => deleteexpense()}>
              Delete Expense
            </button>

            <button type="button" onClick={(e) => editexpense(item2.id)}>
              EditExpense
            </button>
          </>
        );
      })}
      <h4>[YOUR TOTAL INCOME]:+₹{totalncome}</h4>
      <h4>[YOUR TOTAL EXPENSE]:-₹{totalexpense}</h4>
      <h4>[YOUR TOTAL BALANCE]:₹{totalbalance}</h4>
    </div>
  );
}

export default Expenselist;
