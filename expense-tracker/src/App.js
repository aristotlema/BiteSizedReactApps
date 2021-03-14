import React from 'react';
import ExpenseList from './components/ExpenseList';
import expensesList from './expensesList';

const App = () => {
    return (
        <ExpenseList expensesList={expensesList} />
    );
};

export default App;