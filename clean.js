'user strict';

// const { get } = require('core-js/core/dict');
/*

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] || 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  // budget.push({ value: -value, description, user: cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// console.log(newBudget1);
// console.log(newBudget2);

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limity ' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value < -bigLimit)
    // .map(entry => entry.description.slice(-2))
    // .join(' / ');
    .reduce((acc, cur) => `${acc} / ${cur.description.slice(-2)}`, '')
    .slice(2);

  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

// console.log(budget);
logBigExpenses(finalBudget, 500);

*/

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// Geir

const newExpenses = Object.freeze([
  { value: 10, description: 'Pizza 🍕', user: '' },
  { value: 100, description: 'Movies 🍿', user: 'Matilda' },
  { value: 200, description: 'Stuff', user: 'Jay' },
]);

const getLimit = (limits, user) => limits?.[user] || 0;

const setUserName = user => (user ? user.toLowerCase() : 'jonas');

const expensesToAdd = (expenses, limits) =>
  expenses
    .map(entry => ({ ...entry, user: setUserName(entry.user) }))
    .filter(entry => entry.value <= getLimit(limits, entry.user));

const checkExpense = (entry, limits) =>
  entry.value < -getLimit(limits, entry.user)
    ? { ...entry, flag: 'limit' }
    : entry;

const finalBudget = budget
  .concat(expensesToAdd(newExpenses, spendingLimits))
  .map(el => checkExpense(el, spendingLimits));

console.log(finalBudget);

console.log(newExpenses);
