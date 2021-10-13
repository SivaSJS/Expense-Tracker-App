import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Wifi router',
    amount: 24.12,
    date: new Date(2020, 7, 14),
  },

  { id: 'e2', 
    title: 'Samsung TV',
    amount: 250.22,
    date: new Date(2021, 2, 12) },
    
  {
    id: 'e3',
    title: 'Books',
    amount: 14.50,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Almond oil',
    amount: 20,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;