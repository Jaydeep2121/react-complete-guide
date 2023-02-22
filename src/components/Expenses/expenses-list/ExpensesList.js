import './ExpensesList.css';
import ExpenseItem from '../expenses-item/ExpenseItem';

const ExpensesList = (props) => {
  if (props.ListOfitems.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
  }
  return (
    <ul className='expenses-list'>
        {props.ListOfitems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
        ))}
    </ul>
  );
}
export default ExpensesList;