import React, {  createContext, useReducer } from "react"


const initialState = {
    income: [
        { id: 1, incomename: "carsold", incomeamount: 8000 },
        { id: 1, incomename: "bikasold", incomeamount: 9000 },
        { id: 1, incomename: "mobilesold", incomeamount: 10000 },

    ],

    expense: [
        { id: 1, expensename: "carsold", expenseamount: 8000 },
        { id: 1, expensename: "bikesold", expensemount: 9000 },
        { id: 1, expensename: "mobilesold", expenseamount: 10000 },

    ]
}

export const Appreducer=()=>{

}
 
export const Globalcontext=createContext()

export const GlobalcontextProvider=({Children}
    )=>{
    const [state]=useReducer(Appreducer,initialState)
    return(
        <GlobalcontextProvider values={{income:state.income,
            expense: state.expense
        }}>{Children}</GlobalcontextProvider>
    )
}