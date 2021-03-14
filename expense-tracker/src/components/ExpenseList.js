import React from 'react';



const ExpenseList = ({ expensesList }) => {

    console.log(expensesList);
    const renderExpenses = expensesList.map((expense) => {
        return <div>{expense.id} - {expense.category} - {expense.paymentMethod}</div>;
        console.log(expense.category);
    });

    return <div>{renderExpenses}</div>;
};

export default ExpenseList;